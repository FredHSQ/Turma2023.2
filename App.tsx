import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, TextInput, FlatList } from "react-native";
import { styles } from "./styles";
import { SkillButton } from "./src/components/SkillButton";
import { Button } from "./src/components/Button";

export interface skillProps {
	name: string,
	id: string
}

const App = () => {
	const [newSkill, setNewSkill] = useState<string>('')
	const [greetings, setGreetings] = useState<string>('');
	const [skills, setSkills] = useState<skillProps[]>([]);

	function addNewSkill () {
		const data: skillProps = {
			name: newSkill,
			id: String(new Date().getTime())
		}
		setSkills(oldState => [...oldState, data])
	}

	function removeSkill(id: string) {
		setSkills(oldState=>oldState.filter(
			skill => skill.id !== id
		))
	}

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

			<Button onPress={addNewSkill} />

			<FlatList
				data={skills}
				keyExtractor={item=> item.id}
				renderItem={({ item }) => {
					return <SkillButton removeSkill={removeSkill} item={item} />
				}}
			/>
		</View>
	)
};

export default App;