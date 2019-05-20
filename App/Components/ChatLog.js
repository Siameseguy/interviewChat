import React from 'react';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';
import ChatMessage from './ChatMessage';
import AddNewMessage from './AddNewMesssage';

const ChatLog = ({ chats }) => {
	let i = 0;

	return (
		<ScrollView>
			<View
				style={{
					flex: 1,
					flexDirection: 'column',
					width: '100%',
					marginTop: 50
				}}
			>
				{chats.map(chatMessage => {
					i = i + 1;
					return <ChatMessage key={`chat${i}`} chatMessage={chatMessage} />;
				})}
				<KeyboardAvoidingView
					enabled
					behavior="padding"
					keyboardVerticalOffset={64}
				>
					<AddNewMessage />
				</KeyboardAvoidingView>
			</View>
		</ScrollView>
	);
};

ChatLog.propTypes = {
	chats: PropTypes.arrayOf(
		PropTypes.shape({
			message: PropTypes.string.isRequired,
			user_email: PropTypes.string.isRequired
		}).isRequired
	).isRequired
};

export default ChatLog;
