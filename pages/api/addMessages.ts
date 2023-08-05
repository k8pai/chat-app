// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { serverPusher } from '@/pusher';
import redis from '@/redis';
import { Messages } from '@/typings';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
	messages: Messages;
};

type Error = {
	error: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data | Error>,
) {
	if (req.method !== 'POST') {
		return res.status(404).json({ error: 'Method not allowed.' });
	}

	const { options } = req.body;

	const messages: Messages = {
		...options,
		created_at: Date.now(),
	};

	await redis.hset('messages', options.id, JSON.stringify(messages));
	serverPusher.trigger('messages', 'new-messages', messages);

	return res.status(200).json({ messages });
}
