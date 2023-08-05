import Pusher from 'pusher';
import ClientPusher from 'pusher-js';

export const serverPusher = new Pusher({
	appId: '1646895',
	key: '9d8ddc6d7c4ca19901fa',
	secret: '61728d3b18d620a1a7ee',
	cluster: 'ap2',
	useTLS: true,
});

export const clientPusher = new ClientPusher('9d8ddc6d7c4ca19901fa', {
	cluster: 'ap2',
	forceTLS: true,
});
