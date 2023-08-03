import React, { useState } from 'react';
import { sessionType } from '@/pages';
import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import { MdLogout } from 'react-icons/md';

const Sidenav: React.FC<sessionType> = ({ user }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

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
		<div className="flex flex-col justify-between w-64 p-4 bg-neutral-800/30 text-white min-h-full">
			<div className="text-2xl font-bold mb-6">Chat App</div>
			{/* {user ? (
				<>
					<button
						className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white mb-4"
						onClick={handleAddFriend}
					>
						Add Friend
					</button>
					<button
						className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white"
						onClick={handleLogout}
					>
						Logout
					</button>
				</>
			) : (
				<button
					className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white"
					onClick={handleSignIn}
				>
					Sign In
				</button>
			)} */}

			<div>
				{user ? (
					<div className="flex items-center justify-between">
						<div className="flex space-x-3">
							<Image
								src={`${user.image}`}
								alt={user.name!}
								height={10}
								width={30}
								className="rounded-full"
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
