import { SessionUser } from '@/typings';
import Image from 'next/image';
import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';

export default function Header({ user }: SessionUser) {
	return (
		<div className="px-6 mb-3 py-4 sticky top-0 bg-black z-50 border-b-[0.25px] border-b-neutral-800 flex justify-between shadow-md">
			<div className="space-y-1">
				<h1 className="text-xl font-semibold">General Chat</h1>
				<p className="text-xs">12,345 members</p>
			</div>
			<div className=" flex space-x-3 items-center">
				<Image
					src={user?.image!}
					alt={user?.name!}
					height={10}
					width={30}
					className="rounded-full aspect-square w-8 h-8"
				/>
				<button>
					<BsThreeDotsVertical className="rounded-full aspect-square w-6 h-6" />
				</button>
			</div>
		</div>
	);
}
