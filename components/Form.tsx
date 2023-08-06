import fetcher from '@/lib/fetcher';
import { Messages, SessionUser } from '@/typings';
import React, { FormEvent, useState } from 'react';
import { VscSend } from 'react-icons/vsc';
import useSWR from 'swr';
import { v4 as uuid } from 'uuid';

const Form: React.FC<SessionUser> = ({ user }) => {
	const [state, setState] = useState('');
	const { data: messages, error, mutate } = useSWR('/api/messages', fetcher);

	console.log('data => ', messages);
	if (error) return;

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		// You can implement the logic to send the message here
		event?.preventDefault();
		if (!state) return;

		const messageToSend = state;
		setState('');

		const id = uuid();
		const options: Messages = {
			id,
			message: messageToSend,
			created_at: Date.now(),
			username: user?.name!,
			profilePic: user?.image!,
			email: user?.email!,
		};

		const addToDb = async () => {
			const data = await fetch('/api/addMessages', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					options,
				}),
			}).then((res) => res.json());

			return [...messages!, data.messages];
		};
		await mutate(addToDb, {
			optimisticData: [...messages!, options],
			rollbackOnError: true,
		});
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="fixed bottom-0 bg-black z-50 flex max-w-5xl w-full flex-row p-5 border-t border-neutral-800"
		>
			<input
				type="text"
				placeholder="Type your message..."
				value={state}
				onChange={(e) => setState(e.target.value)}
				className="flex-1 py-2 px-4 mx-2 rounded-md shadow-md bg-neutral-800/40 focus:outline-none"
			/>
			<button
				disabled={!state}
				className="bg-neutral-800 transition-all hover:bg-neutral-800/40 py-2 px-3 rounded-lg"
				// onClick={handleSend}
				type="submit"
			>
				<VscSend className="h-5 w-5 box-border text-neutral-100" />
			</button>
		</form>
	);
};

export default Form;
