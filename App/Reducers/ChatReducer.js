import { ADD_NEW_MESSAGE } from '../Actions/AddNewMessage';

const defaultState = [
	{
		user_email: 'a@b.com',
		message: 'Hello world!'
	}
];

const chat = (state = defaultState, action) => {
	switch (action.type) {
		case 'ADD_MESSAGE':
			let { user_email, message } = action;
			return [
				...state,
				{
					user_email,
					message
				}
			];
		case ADD_NEW_MESSAGE:
			let { payload } = action;
			return [...state, payload];
		default:
			return state;
	}
};

export default chat;
