import React, {useState}from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
export default function Home() {
	
	export default function Home({ navigation }) {
	
	return (
	 <View style={styles.container}>
		<Text>Home Page</Text>
		
		<TouchableOpacity
			onPress={() => navigation.navigate('Sobre')}
			>
			<Text>Sobre</Text>
			</TouchableOpacity>
			
			</View>
			);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFF',
	}
});