import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewMessage } from '../Actions/AddNewMessage';

import {
	View,
	KeyboardAvoidingView,
	FlatList,
	StyleSheet,
	TextInput,
	Button
} from 'react-native';
import PropTypes from 'prop-types';
import ChatMessage from './ChatMessage';

class ChatLog extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user_email: 'johnDoe@email.com',
			message: ''
		};
	}

	render() {
		return (
			<View
				style={{
					flex: 1,
					width: '100%',
					marginTop: 50
				}}
			>
				<FlatList
					style={styles.flatlist}
					data={this.props.chats}
					keyExtractor={(item, index) => index.toString()}
					renderItem={({ item }) => {
						return <ChatMessage chatMessage={item} />;
					}}
					ref="flatList"
					onContentSizeChange={() => this.refs.flatList.scrollToEnd()}
				/>
				<View style={styles.container}>
					<KeyboardAvoidingView
						style={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}
						behavior="position"
					>
						<TextInput
							style={styles.input}
							clearButtonMode="always"
							onChangeText={text => this.setState({ message: text })}
							placeholder="..."
						/>
						<Button
							style={styles.button}
							onPress={() => this.props.send(this.state)}
							title="SEND"
						/>
					</KeyboardAvoidingView>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	flatlist: {
		marginBottom: 100
	},
	container: {
		flex: 1,
		flexDirection: 'row',
		position: 'absolute',
		backgroundColor: '#fff',
		width: '100%',
		height: 40,
		bottom: 0
	},
	input: {
		flex: 1,
		borderColor: '#000',
		backgroundColor: '#fff',
		borderWidth: 1,
		height: 40,
		color: '#000'
	},
	button: {
		flex: 1
	}
});

ChatLog.propTypes = {
	chats: PropTypes.arrayOf(
		PropTypes.shape({
			message: PropTypes.string.isRequired,
			user_email: PropTypes.string.isRequired
		}).isRequired
	).isRequired
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		send: state => {
			const newMessage = {
				user_email: state.user_email,
				message: state.message
			};

			dispatch(addNewMessage(newMessage));
		}
	};
};

export default connect(
	null,
	mapDispatchToProps
)(ChatLog);
