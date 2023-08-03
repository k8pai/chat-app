import React, { useState } from 'react';
import { VscSend } from 'react-icons/vsc';

const Form: React.FC = () => {
	const [message, setMessage] = useState('');

	const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setMessage(e.target.value);
	};

	const handleSend = () => {
		// You can implement the logic to send the message here
		console.log('Sending message:', message);
		// Reset the input field after sending the message
		setMessage('');
	};

	return (
		<form className="absolute bottom-0 box-border flex w-full bg-neutral-700/30 p-1 rounded-lg">
			<input
				type="text"
				placeholder="Type your message..."
				value={message}
				onChange={handleMessageChange}
				className="flex-1 py-2 px-4 rounded-md bg-transparent focus:outline-none"
			/>
			<button
				disabled={!message}
				className="bg-transparent transition-all hover:bg-neutral-800/40 py-2 px-4 rounded-md"
				onClick={handleSend}
			>
				<VscSend className="h-5 w-5 box-border text-neutral-100" />
			</button>
		</form>
	);
};

export default Form;
