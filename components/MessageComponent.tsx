import { Messages } from '@/typings';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';

type props = {
	message: Messages;
};

function MessageComponent({
	message: { profilePic, username, id, created_at, message, email },
}: props) {
	const { data: session } = useSession();
	console.log('name & pic', username, profilePic);
	let isUser = session?.user?.email === email!;
	return (
		<div
			className={`flex items-start w-full my-4 ${
				isUser ? 'justify-end' : 'justify-start'
			}`}
		>
			<div className={`hidden md:block ${isUser ? 'order-1' : ''}`}>
				<Image
					src={`${profilePic}`}
					alt={username}
					height={10}
					width={30}
					className="rounded-full aspect-square w-10 h-10"
				/>
			</div>
			<div className={`relative md:min-w-[300px]`}>
				<p
					className={`absolute whitespace-nowrap text-xs top-0 -mt-2.5 w-full ${
						isUser
							? 'text-right -inset-x-1 pr-3.5'
							: 'text-left ml-3.5'
					} `}
				>
					{username}
				</p>
				<div
					className={`relative mx-3 mt-2 bg-neutral-800 rounded-md md:max-w-md w-fit  ${
						isUser ? 'float-right' : ''
					}`}
				>
					<div className={`py-1.5 px-3.5 ${isUser ? '' : ''} `}>
						<p>{message}</p>
					</div>
					<div
						className={`absolute text-xs mt-1 mr-1 ${
							isUser ? 'left-0' : 'right-0'
						} `}
					>
						{new Date(created_at).toLocaleTimeString([], {
							hour: '2-digit',
							minute: '2-digit',
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default MessageComponent;
