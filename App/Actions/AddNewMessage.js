export const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';

export const addNewMessage = message => {
	return { type: ADD_NEW_MESSAGE, payload: message };
};
