import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MesssageCard = props => {
	return (
		<View>
			<View
				style={{
					flex: 1,
					flexDirection: 'row',
					alignSelf: 'flex-end'
				}}
			>
				<Text
					style={
						props.user_email === 'johnDoe@emailcom'
							? styles.userChatBubble
							: styles.chatBubble
					}
				>
					{props.message}
				</Text>
				<Image
					style={styles.roundedProfileImage}
					source={{ uri: props.avatar }}
				/>
			</View>
			<View>
				<Text>{getDate()}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	roundedProfileImage: {
		width: 50,
		height: 50,
		borderWidth: 3,
		borderColor: 'black',
		borderRadius: 25,
		padding: 10
	},

	chatBubble: {
		backgroundColor: '#008000',
		padding: 10,
		color: '#fff',
		borderColor: 'black',
		borderRadius: 5,
		overflow: 'hidden',
		margin: 5
	},

	userChatBubble: {
		backgroundColor: 'blue',
		padding: 10,
		color: '#fff',
		borderColor: 'black',
		borderRadius: 5,
		overflow: 'hidden',
		margin: 5
	}
});

export default MesssageCard;
