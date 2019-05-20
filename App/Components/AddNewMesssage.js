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

	render() {
		return (
			<View style={styles.container}>
				<TextInput
					style={{
						flex: 1,
						height: 40,
						borderColor: 'gray',
						borderWidth: 1
					}}
					name="messageInput"
					placeholder="..."
					onChangeText={this.onChangeHandler}
					value={this.state.newMessage}
				/>
				<Button
					style={{ flex: 1 }}
					color="#841584"
					title="submit"
					onPress={this.props.handleSubmit}
				>
					Press Me!
				</Button>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		position: 'absolute'
	}
});

const dispatchProps = (dispatch, ownProps) => {
	return {
		handleSubmit: () => {
			const newMessage = {
				user_email: this.state.email,
				message: this.state.content
			};

			dispatch(addMoreChatsSaga(newMessage));
			alert('got here');
		}
	};
};

export default connect(
	null,
	dispatchProps
)(AddNewMessage);
