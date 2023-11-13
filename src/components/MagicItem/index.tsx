import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';

interface MagicItemProps {
	name: string
}

export const MagicItem = ({ name }: MagicItemProps) => {
	return <View style={styles.buttonMagicItem}>
		<Text style={styles.textMagicItem}>
			{ name }
		</Text>
	</View>
}