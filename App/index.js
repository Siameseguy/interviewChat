import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import ConnectedChatLog from './Containers/ConnectedChatLog';
import SimpleChatApp from './Reducers';
import { addChatsSaga, addMoreChatsSaga } from './Sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(SimpleChatApp, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(addChatsSaga, addMoreChatsSaga);

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<View style={styles.container}>
					<ConnectedChatLog />
				</View>
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 5
	}
});
