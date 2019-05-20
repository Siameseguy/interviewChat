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

	let keyExtractor = index => index.toString();

	function filterMessage(str) {
		let strArr = str.split(' ');
		for (var i = 0; i < strArr.length; i++) {
			if (strArr[i].length === 4) {
				strArr[i] = '****';
			}
		}
		return strArr.join(' ');
	}

	return (
		<View>
			<FlatList
				data={[chatMessage]}
				keyExtractor={keyExtractor}
				renderItem={({ item }) => (
					<MessageCard
						message={filterMessage(item.message)}
						avatar={avatarUrl}
					/>
				)}
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
