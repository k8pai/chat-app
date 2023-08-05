// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import redis from '@/redis';
import { Messages } from '@/typings';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
	messages: Messages[];
};

type Error = {
	error: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data | Error>,
) {
	if (req.method !== 'GET') {
		return res.status(404).json({ error: 'Method not allowed.' });
	}

	const messageResponse = await redis.hvals('messages');
	const messages: Messages[] = messageResponse
		.map((el) => JSON.parse(el))
		.sort((a, b) => a.created_at - b.created_at);

	return res.status(200).json({ messages });
}
