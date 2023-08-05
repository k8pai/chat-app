import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import React from 'react';

export default function Providers({
	children,
	session,
}: {
	children: React.ReactNode;
	session: Session;
}) {
	return <SessionProvider>{children}</SessionProvider>;
}
