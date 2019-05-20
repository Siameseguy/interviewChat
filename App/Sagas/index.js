import { put, delay } from 'redux-saga/effects';
import lorem from 'lorem-ipsum-react-native';

const emails = [
	'a@b.com',
	'test@rehashstudio.com',
	'steve@jobs.com',
	'hello@world.com',
	'foo@bar.com'
];

export function* addChatsSaga() {
	while (true) {
		yield delay(50000);
		const email = emails[Math.floor(Math.random() * emails.length)];
		yield put({
			type: 'ADD_MESSAGE',
			user_email: email,
			message: lorem({})
		});
	}
}

export function* addMoreChatsSaga(message) {
	while (true) {
		yield delay(1000);
		dispatch({
			type: 'ADD_MESSAGE',
			user_email: message.email,
			message: message.cotent
		});
	}
}
