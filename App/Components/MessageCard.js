import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MesssageCard = props => {
	console.log(props);
	return (
		<View>
			<View
				style={
					props.email === 'johnDoe@email.com'
						? styles.userContainer
						: styles.container
				}
			>
				<Text
					style={
						props.email === 'johnDoe@email.com'
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
	container: {
		flex: 1,
		flexDirection: 'row',
		alignSelf: 'flex-start'
	},
	userContainer: {
		flex: 1,
		flexDirection: 'row',
		alignSelf: 'flex-end'
	},
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
