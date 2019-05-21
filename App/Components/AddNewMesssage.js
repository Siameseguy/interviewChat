import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, TextInput, Text, Button } from 'react-native';
import { addMoreChatsSaga } from '../Sagas/index';

class AddNewMessage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: 'JohnDoe@gmail.com',
			content: ''
		};
	}

	onChangeHandler = value => {
		this.setState({ content: value });
	};

	handleSubmit = (email, message) => {
		alert(this.state.email, this.state.content);
	};

	render() {
		return (
			<View style={styles.container}>
				<TextInput
					style={styles.textInput}
					name="messageInput"
					placeholder="..."
					onChangeText={this.onChangeHandler}
					value={this.state.newMessage}
				/>
				<Button
					style={{ flex: 1 }}
					color="#841584"
					title="submit"
					onPress={() => this.props.handleSubmit(this.state)}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		position: 'absolute'
	},
	textInput: {
		flex: 1,
		height: 40,
		borderColor: 'gray',
		borderWidth: 1
	}
});

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		handleSubmit: state => {
			const newMessage = {
				user_email: state.email,
				message: state.content
			};

			dispatch(addMoreChatsSaga(newMessage));
		}
	};
};

export default connect(
	null,
	mapDispatchToProps
)(AddNewMessage);
