import React from 'react';
import Header from './Header';
import Sidenav from './Sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex min-h-screen h-full max-w-full w-full">
			{/* <Sidenav /> */}
			<div className="flex-1">{children}</div>
		</div>
	);
}
