import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MesssageCard = props => {
	return (
		<View>
			<View
				style={{
					flex: 1,
					flexDirection: 'row',
					alignSelf: 'flex-end',
					padding: 5
				}}
			>
				<Text style={styles.chatBubble}>{props.message}</Text>
				<Image
					style={styles.roundedProfileImage}
					source={{ uri: props.avatar }}
				/>
			</View>
			<View
				style={{
					flexDirection: 'column',
					width: '100%',
					alignself: 'center',
					justifyContent: 'center'
				}}
			>
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
	}
});

export default MesssageCard;
