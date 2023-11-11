import React from 'react';
import { View, TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import { styles } from './styles';

interface ButtonProps extends TouchableOpacityProps {
	priority?: 'primary' | 'secondary'
}

export const Button = ({ priority='primary', ...rest }: ButtonProps) => {
	return <TouchableOpacity {...rest}  style={priority === 'primary' ? styles.button : styles.button2}>
		<Text style={styles.buttonText}>Add new Skill</Text>
	</TouchableOpacity>
}