import { Session } from 'next-auth';

export type Messages = {
	id: string;
	message: strin;
	created_at: number;
	username: string;
	profilePic: string;
	email: string;
};

export type SessionUser = {
	user: Session['user'];
};
