import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { MagicItem, MagicItemListProps } from "../../components/MagicItem";
import { getMagicItemList } from "../../services/apiDnd";
import { ModalItemDetails } from "../../components/Modals/ModalItemDetails";

export const Shop = () => {
	const [magicItemList, setMagicItemList] = useState<MagicItemListProps[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [isModalVisible, setIsModalVisible] = useState<boolean>(true);

	useEffect(() => {
		listMagicItemList();
	}, []);

	function listMagicItemList() {
		getMagicItemList()
			.then(response => {
				setMagicItemList(response.data.results);
			})
			.catch(error => {
				console.log(error.data);
			}).finally(()=>{
				setIsLoading(false);
			})
	}

	return <View style={styles.container}>
		<Text style={styles.title}>Magic Shop</Text>
		{
			isLoading ?
				<ActivityIndicator
					size={"large"}
					color={'#156'}
				/>
				:
				<FlatList
					data={magicItemList}
					renderItem={({ item }) => {
						return <TouchableOpacity onPress={()=> setIsModalVisible(true)}>
							<MagicItem item={item} />
						</TouchableOpacity>
					}}
				/>
		}
		<ModalItemDetails isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
	</View>
};