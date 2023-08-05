import React, { useState } from 'react';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import { MdLogout } from 'react-icons/md';
import { SessionUser } from '@/typings';

const Sidenav: React.FC<SessionUser> = ({ user }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	console.log('session => ', user);

	const handleAddFriend = () => {
		// Add friend logic here
		console.log('session => ', user);
	};

	const handleLogout = () => {
		// Logout logic here
		setIsLoggedIn(false);
	};

	const handleSignIn = () => {
		// Sign In logic here
		setIsLoggedIn(true);
	};

	return (
		<div className="flex flex-col justify-between  min-w-[300px] w-3/12 p-4 bg-neutral-800/30 text-white h-screen sticky top-0">
			<div className="text-2xl font-bold mb-6">Chat App</div>

			<div>
				{user ? (
					<div className="flex items-center justify-between">
						<div className="flex space-x-3">
							<Image
								src={`${user.image}`}
								alt={user.name!}
								height={10}
								width={30}
								className="rounded-full aspect-square w-8 h-8"
							/>
							<div>
								<h1 className="font-semibold tracking-wide">
									{user.name}
								</h1>
							</div>
						</div>
						<button
							onClick={() => signOut()}
							className="p-1 hover:dark:bg-neutral-700/30 rounded"
						>
							<MdLogout className={'h-5 w-5 '} />
						</button>
					</div>
				) : null}
			</div>
		</div>
	);
};

export default Sidenav;
