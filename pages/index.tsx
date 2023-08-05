import Form from '@/components/Form';
import Sidenav from '@/components/Sidenav';
import { Session } from 'next-auth';
import { GetServerSidePropsContext } from 'next/types';
import { getServerSession } from 'next-auth/next';
import { authOptions } from './api/auth/[...nextauth]';
import Messages from '@/components/Messages';
import Header from '@/components/Header';
import Providers from '@/Providers';

export type sessionType = {
	session: Session;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const session = await getServerSession(
		context.req,
		context.res,
		authOptions,
	);
	// 	const session = await getServerSession();
	return { props: { session } };
}

export default function Home({ session }: sessionType) {
	return (
		<Providers session={session}>
			<div className="min-h-screen h-full max-w-5xl w-full mx-auto">
				<Header user={session.user} />
				<Messages />
				<Form user={session?.user} />
			</div>
		</Providers>
	);
}
