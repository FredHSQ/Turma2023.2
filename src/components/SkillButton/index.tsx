import React from "react";
import { TouchableOpacity, Image, Text } from "react-native";
import SkillCircle from "../../../PngItem_2901848.png";
import { styles } from "./styles";
import { skillProps } from "../../../App";

interface SkillButtonProps {
	item: skillProps;
	removeSkill:(id:string)=> void;
};

export const SkillButton = ({ item, removeSkill }: SkillButtonProps) => {
	const { id, name } = item;

	return <TouchableOpacity onPress={() => removeSkill(id)} style={styles.buttonSkill}>
		<Image source={SkillCircle} style={styles.image} />
		<Text style={styles.textSkill}>
			{ name }
		</Text>
	</TouchableOpacity>;
}