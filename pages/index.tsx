import Form from '@/components/Form';
import Sidenav from '@/components/Sidenav';
import { Session } from 'next-auth';
import { GetServerSidePropsContext } from 'next/types';
import { getServerSession } from 'next-auth/next';
import { authOptions } from './api/auth/[...nextauth]';

export type sessionType = {
	user: Session['user'];
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const session = await getServerSession(
		context.req,
		context.res,
		authOptions,
	);
	// 	const session = await getServerSession();
	return { props: { user: session?.user } };
}

export default function Home({ user }: sessionType) {
	return (
		<div className="box-border">
			<div className="flex min-h-screen h-full">
				<Sidenav user={user} />
				<div className="m-3 relative w-full">
					<Form />
				</div>
			</div>
		</div>
	);
}
