import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';

export interface MagicItemListProps {
	index: string;
	name: string;
	url: string;
}

export interface MagicItemProps {
	item: MagicItemListProps
}

export const MagicItem = ({ item }: MagicItemProps) => {
	return <View style={styles.buttonMagicItem}>
		<Text style={styles.textMagicItem}>
			{ item.name }
		</Text>
	</View>
}