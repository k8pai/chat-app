import { Messages } from '@/typings';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';
import { BsDot } from 'react-icons/bs';

type props = {
	message: Messages;
	prev?: Messages | undefined;
	next?: Messages | undefined;
};

function MessageComponent({
	message: { profilePic, username, id, created_at, message, email },
	prev,
	next,
}: props) {
	const { data: session } = useSession();
	let isUser = session?.user?.email === email!;
	let prevMessage = prev?.email === email!;
	let nextMessage = next?.email === email;
	console.log('prev & curr ', email, prev?.email, prevMessage);
	return (
		<div
			className={`flex items-start w-full mt-1 ${
				isUser ? 'justify-end' : 'justify-start'
			} ${nextMessage ? '' : ' mb-3'}`}
		>
			<div className={`hidden md:block ${isUser ? 'order-1' : ''}`}>
				<Image
					src={`${profilePic}`}
					alt={username}
					height={10}
					width={30}
					className={`rounded-full aspect-square w-10 h-10  ${
						prevMessage ? 'opacity-0' : ''
					}`}
				/>
			</div>
			<div
				className={`relative md:min-w-[300px] w-full ${
					prevMessage ? '' : 'mb-0.5'
				}`}
			>
				<div
					className={`flex items-center space-x-1 whitespace-nowrap text-xs w-full ${
						isUser ? 'justify-end pr-4' : '-mt-1 text-left ml-3.5'
					} ${prevMessage ? 'hidden' : 'mb-1'}`}
				>
					<span>{username}</span>
					<BsDot className={'h-2 w-2 text-white'} />
					<span className="uppercase">
						{new Date(created_at).toLocaleTimeString([], {
							hour: 'numeric',
							minute: 'numeric',
							hour12: true,
						})}
					</span>
				</div>
				<div
					className={`relative bg-neutral-800 rounded-md md:max-w-md w-fit ${
						isUser ? 'float-right mr-3 mt-0' : 'ml-3 mt-0'
					}`}
				>
					<div className={`py-1.5 px-3.5 ${isUser ? '' : ''}`}>
						<p>{message}</p>
					</div>
					{/* <div
						className={`absolute text-xs mr-1 uppercase whitespace-nowrap ${
							isUser ? 'left-0' : 'left-full -translate-x-full'
						}  ${nextMessage ? 'hidden mt-0' : ' mt-1'}`}
					>
						{new Date(created_at).toLocaleTimeString([], {
							hour: 'numeric',
							minute: 'numeric',
							hour12: true,
						})}
					</div> */}
				</div>
			</div>
		</div>
	);
}

export default MessageComponent;
