import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import GravatarApi from 'gravatar-api';

import MessageCard from './MessageCard';

const ChatMessage = ({ chatMessage }) => {
	const avatarUrl = GravatarApi.imageUrl({
		email: chatMessage.user_email,
		parameters: { size: '50', d: 'monsterid' }
	}).replace('http', 'https');

	filterMessage = str => {
		let strArr = str.split(' ');
		for (var i = 0; i < strArr.length; i++) {
			if (strArr[i].length === 4) {
				strArr[i] = '****';
			}
		}
		return strArr.join(' ');
	};

	getDate = () => {
		let date = new Date().getDate();
		let month = new Date().getMonth() + 1;
		let year = new Date().getFullYear();
		let hours = new Date().getHours(); //Current Hours
		let min = new Date().getMinutes(); //Current Minutes
		let ampm = hours >= 12 ? 'PM' : 'AM';

		return `${month}-${date}-${year}, ${hours}:${min} ${ampm}`;
	};

	return (
		<View>
			<MessageCard
				message={filterMessage(chatMessage.message)}
				avatar={avatarUrl}
				date={getDate}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	roundedProfileImage: {
		width: 50,
		height: 50,
		borderWidth: 3,
		borderColor: 'black',
		borderRadius: 25
	}
});

ChatMessage.propTypes = {
	chatMessage: PropTypes.object.isRequired
};

export default ChatMessage;
