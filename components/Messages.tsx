import fetcher from '@/lib/fetcher';
import React, { useEffect, useRef } from 'react';
import useSWR from 'swr';
import MessageComponent from './MessageComponent';
import { clientPusher } from '@/pusher';
import { Messages } from '@/typings';

function Messages() {
	const { data, error, mutate } = useSWR('/api/messages', fetcher);

	const messageRef = useRef<HTMLDivElement>(null);

	const scrollToLast = () => {
		if (messageRef.current) {
			const messageRefInstance = messageRef.current;
			messageRefInstance.scrollTop = messageRefInstance.scrollHeight;
		}
	};

	useEffect(() => {
		scrollToLast();
		var channel = clientPusher.subscribe('messages');
		channel.bind('new-messages', async (message: Messages) => {
			if (data?.find((item) => item.id === message.id)) return;

			if (!message) {
				mutate(fetcher);
			} else {
				mutate(fetcher, {
					optimisticData: [...data!, message],
					rollbackOnError: true,
				});
			}
		});

		return () => {
			channel.unsubscribe();
			channel.unbind();
		};
	}, [data, mutate, clientPusher]);

	return (
		<div
			ref={messageRef}
			className="flex flex-col justify-normal px-6 pb-24 box-border"
			style={{ overflowY: 'auto' }}
		>
			{data?.map((el) => (
				<MessageComponent key={el.id} message={el!} />
			))}
		</div>
	);
}

export default Messages;
