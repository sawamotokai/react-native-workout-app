import React, { Fragment, useState } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button } from 'react-native';

import {
	Header,
	LearnMoreLinks,
	Colors,
	DebugInstructions,
	ReloadInstructions
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
	const [ count, setCount ] = useState(0);
	return (
		<View style={styles.sectionContainer}>
			<Text>Welcome</Text>
			<Text>{count}</Text>
			<Button
				title="increment"
				onPress={() => {
					setCount(count + 1);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: Colors.lighter
	},
	engine: {
		position: 'absolute',
		right: 0
	},
	body: {
		backgroundColor: Colors.white
	},
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600',
		color: Colors.black
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: '400',
		color: Colors.dark
	},
	highlight: {
		fontWeight: '700'
	},
	footer: {
		color: Colors.dark,
		fontSize: 12,
		fontWeight: '600',
		padding: 4,
		paddingRight: 12,
		textAlign: 'right'
	}
});

export default App;
