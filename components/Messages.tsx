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
		messageRef.current?.scrollIntoView();
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
			className="flex flex-col justify-normal px-4 pb-24 pt-4 box-border"
			style={{ overflowY: 'auto' }}
		>
			{data?.map((el, ind) => (
				<MessageComponent
					key={el.id}
					message={el!}
					prev={data[ind - 1]}
					next={data[ind + 1]}
				/>
			))}
			<div ref={messageRef}></div>
		</div>
	);
}

export default Messages;
