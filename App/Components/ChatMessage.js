import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import GravatarApi from 'gravatar-api';

const ChatMessage = ({ chatMessage }) => {
	const avatarUrl = GravatarApi.imageUrl({
		email: chatMessage.user_email,
		parameters: { size: '50', d: 'monsterid' }
	}).replace('http', 'https');

	const messages = ({ item }) => (
		<View
			style={{
				flex: 1,
				flexDirection: 'row',
				alignSelf: 'flex-end',
				height: 60,
				maxHeight: 60
			}}
		>
			<Text>{item.message}</Text>
			<Image style={styles.roundedProfileImage} source={{ uri: avatarUrl }} />
		</View>
	);

	return (
		<View>
			<FlatList data={[chatMessage]} renderItem={messages} />
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
