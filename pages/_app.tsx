import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { authOptions } from './api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import { GetServerSidePropsContext } from 'next';
import Layout from '@/components/Layout';

// export async function getServerSideProps(context: GetServerSidePropsContext) {
// 	const session = await getServerSession(
// 		context.req,
// 		context.res,
// 		authOptions,
// 	);
// 	// 	const session = await getServerSession();
// 	return { props: { user: session?.user } };
// }
export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
