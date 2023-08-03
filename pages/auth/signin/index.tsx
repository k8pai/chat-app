import { GetServerSideProps } from 'next';
import { getProviders } from 'next-auth/react';
import React from 'react';
import { signIn, signOut } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';

type props = {
	providers: Awaited<ReturnType<typeof getProviders>>;
};

export const getServerSideProps: GetServerSideProps<props> = async () => {
	const providers = await getProviders();
	return { props: { providers } };
};

function SignInPage({ providers }: props) {
	return (
		<div className="flex flex-wrap flex-col lg:flex-row min-h-screen h-full max-w-full w-full p-10 lg:p-24">
			<div className="capitalize flex-1 px-2 flex-col items-start hidden lg:items-start lg:block lg:border-r pr-5">
				<h1 className="text-3xl pt-4 font-bold tracking-wider">
					Chat App
				</h1>
				<h4 className="text-xl mt-2 tracking-wide">
					A new Era of messaging
				</h4>
				<h6 className=" mt-10 pb-1 font-semibold text-teal-400 text-lg">
					upcoming features
				</h6>
				<ul className="space-y-2 px-4 mt-2 tracking-wide font-semibold list-decimal">
					<li>Multiple group chats</li>
					<li>Individual chats</li>
					<li>Adding friends</li>
					<li>Communities </li>
				</ul>
				<hr className="bg-white text-white h-px w-full mt-20 mb-10" />
				<div className="flex flex-col justify-center items-center w-full">
					<h4 className="text-lg font-mono tracking-wide capitalize">
						Why Chat App?
					</h4>
					<div className="flex mt-10 flex-wrap justify-evenly">
						<div className="m-3 h-fit max-w-[300px] w-full bg-neutral-800/30 rounded shadow-xl transition-all hover:bg-neutral-700/30 font-semibold tracking-wide p-5 capitalize ">
							<h1 className="text-center text-2xl">Simple</h1>
							<p className="mt-3 px-1 tracking-wider">
								<span className="text-neutral-500 font-semibold">
									Chat App
								</span>{' '}
								is so simple you already know how to use it.
							</p>
						</div>
						<div className="m-3 h-fit max-w-[300px] w-full bg-neutral-800/30 rounded shadow-xl transition-all hover:bg-neutral-700/30 font-semibold tracking-wide p-5 capitalize ">
							<h1 className="text-center text-2xl">Synced</h1>
							<p className="mt-3 px-1 tracking-wider">
								<span className="text-neutral-500 font-semibold">
									Chat App
								</span>{' '}
								lets you access your chats from multiple
								devices.
							</p>
						</div>
						<div className="m-3 h-fit max-w-[300px] w-full bg-neutral-800/30 rounded shadow-xl transition-all hover:bg-neutral-700/30 font-semibold tracking-wide p-5 capitalize ">
							<h1 className="text-center text-2xl">Fast</h1>
							<p className="mt-3 px-1 tracking-wider">
								<span className="text-neutral-500 font-semibold">
									Chat App
								</span>{' '}
								delivers messages faster than any other
								application.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="py-10 px-2 flex-1 flex flex-col justify-center items-center space-y-5">
				<h4 className="text-2xl font-semibold font-mono tracking-wide capitalize">
					Authenticate Using
				</h4>
				<div className="flex space-x-3 mt-10 flex-wrap">
					{Object.values(providers!).map(({ id, name }) => (
						<div key={name}>
							<button
								className={`bg-neutral-800/30 rounded shadow-xl transition-all hover:bg-neutral-700/30 font-semibold tracking-wide p-2 capitalize flex items-center space-x-2`}
								onClick={() =>
									signIn(id, {
										callbackUrl:
											process.env.VERCEL_URL ||
											`http://localhost:3000`,
									})
								}
							>
								<FcGoogle />
								<span>{name}</span>
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default SignInPage;
