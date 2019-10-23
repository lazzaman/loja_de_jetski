import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';

export default function App() {
	return (
		<View style={{ flex: 1 }}>
			<View style={imgLoja.container}>
				<Image resizeMode="contain" style={img.stretch} source={require("./assets/jetski.jpg")} />
			</View>
			<View style={cento.container}>
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
					<Text style={{ fontWeight: 'bold', fontSize: 20 }}>JeTski</Text>
					<Text style={{ fontSize: 10 }}>jet skis à venda</Text>
				</View>
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><Button title="Alugar" onPress={() => Alert.alert("Seu jet ski chegará em breve")} /></View>
			</View>
			<View style={sobre.container}>
				<View style={{ flex:1 }}></View>
				<Text style={{ flex:10, justifyContent: 'center' }} >
					A procura de diversão para a familia toda? 
					Já teve vontade de andar de jet ski? 
					Não hà mais problemas, alugamos jet skis por R$500 a hora.
				</Text>
				<View style={{ flex:1 }}></View>
			</View>
		</View>
	);
}

const img = StyleSheet.create({
	stretch: {
		width: 470,
		height: 470,
		flex: 1
	}
});
const imgLoja = StyleSheet.create({
	container: {
		flex: 2,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
const cento = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
const sobre = StyleSheet.create({
	container: {
		flex: 2,
		flexDirection: 'row',
		backgroundColor: '#fff',
	},
});