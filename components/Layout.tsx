import React from 'react';
import Header from './Header';
import Sidenav from './Sidenav';
import { User } from 'next-auth';

export default function Layout({
	children,
	user,
}: {
	children: React.ReactNode;
	user: User;
}) {
	return (
		<div className="flex min-h-screen h-full max-w-full w-full">
			<Sidenav user={user} />
			<div className="flex-1 w-9/12">{children}</div>
		</div>
	);
}
