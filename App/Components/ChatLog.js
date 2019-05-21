import React, { Component } from 'react';
import { View, KeyboardAvoidingView, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import ChatMessage from './ChatMessage';
import AddNewMessage from './AddNewMesssage';

class ChatLog extends Component {
	render() {
		return (
			<View
				style={{
					flex: 1,
					flexDirection: 'column',
					width: '100%',
					marginTop: 50
				}}
			>
				<FlatList
					data={this.props.chats}
					keyExtractor={(item, index) => index.toString()}
					renderItem={({ item }) => {
						return <ChatMessage chatMessage={item} />;
					}}
					ref="flatList"
					onContentSizeChange={() => this.refs.flatList.scrollToEnd()}
				/>

				<KeyboardAvoidingView
					enabled
					behavior="padding"
					keyboardVerticalOffset={64}
				>
					<AddNewMessage />
				</KeyboardAvoidingView>
			</View>
		);
	}
}

ChatLog.propTypes = {
	chats: PropTypes.arrayOf(
		PropTypes.shape({
			message: PropTypes.string.isRequired,
			user_email: PropTypes.string.isRequired
		}).isRequired
	).isRequired
};

export default ChatLog;
