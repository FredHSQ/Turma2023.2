import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "./styles";
import { MagicItem } from "../../components/MagicItem";

export const Shop = () => {
	const [magicItemList, setMagicItemList] = useState<string[]>([
		'1',
		'2',
		'2',
		'2',
		'2'
	]);

	return <View style={styles.container}>
		<Text style={styles.title}>Magic Shop</Text>

		<FlatList
			data={magicItemList}
			renderItem={() => {
				return <MagicItem name="Fred" />
			}}
		/>

	</View>
};