import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, FlatList } from "react-native";
import { styles } from "./styles";
import SkillCircle from "./PngItem_2901848.png";

const App = () => {
	const [newSkill, setNewSkill] = useState<string>('')
	const [greetings, setGreetings] = useState<string>('');

	useEffect(() => {
		const currentHour = new Date().getHours();
		if (currentHour < 12) {
			setGreetings('GoodMorning')
		} else if (currentHour >= 12 && currentHour < 18) {
			setGreetings('Good Afternoon')
		} else {
			setGreetings('Good Evening')
		}
	}, []);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Bem vindo, Fred</Text>
			<Text style={styles.greetings}>
				{greetings}
			</Text>
			<TextInput
				style={styles.input}
				onChangeText={setNewSkill}
				placeholderTextColor='#555'
				placeholder="New Skill"
			/>

			<TouchableOpacity style={styles.button}>
				<Text style={styles.buttonText}>Add new Skill</Text>
			</TouchableOpacity>

			<FlatList
				data={['1','2','3']}
				keyExtractor={item => item}
				renderItem={({item})=>{
					return <View style={styles.buttonSkill}>
						<Image source={SkillCircle} style={styles.image} />
						<Text style={styles.textSkill}>Skill {item}</Text>
					</View>
				}}
			/>
		</View>
	)
};

export default App;