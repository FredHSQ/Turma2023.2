import React, { useEffect, useState } from "react";
import { View, Modal, Text, ActivityIndicator, ScrollView, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import CloseIcon from '../../../assets/close_FILL0_wght400_GRAD0_opsz48.png'
import { getMagicItemDetails, getMagicItemDetailsResponse } from "../../../services/apiDnd";

export const ModalItemDetails = ({ isModalVisible, setIsModalVisible, index }) => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [magicItem, setMagicItem] = useState<getMagicItemDetailsResponse>();

	useEffect(() => {
		writeMagicItemDetails(index)
	}, []);

	function writeMagicItemDetails(index: string) {
		getMagicItemDetails('adamantine-armor')
			.then(response => {
				setMagicItem(response.data);
			})
			.catch(error => {
				console.log(error);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}

	return <Modal
		animationType="slide"
		transparent={true}
		visible={isModalVisible}
		onRequestClose={() => {
			setIsModalVisible(false);
		}}
	>
		<View style={styles.modal}>
			<View style={styles.modalContainer}>
				{
					isLoading ?
						<ActivityIndicator
							size={"large"}
						/>
						:
						<>
							<ScrollView showsVerticalScrollIndicator={false}>
								<View style={styles.titleContainer}>
									<Text style={styles.title}>{magicItem.name}</Text>
									<TouchableOpacity onPress={()=> setIsModalVisible(false)}>
										<Image source={CloseIcon} style={styles.closeIcon}/>
									</TouchableOpacity>
								</View>
								<View style={styles.firstStatsContainer}>
									<View style={styles.firstStats}>
										<Text style={styles.textTitle}>Rarity: </Text>
										<Text style={styles.textTitle}>{magicItem.rarity.name }</Text>
									</View>
									<View style={styles.firstStats}>
										<Text style={styles.textTitle}>Type: </Text>
										<Text style={styles.textTitle}>{magicItem.equipment_category.name}</Text>
									</View>
									<View style={styles.firstStats}>
										<Text style={styles.textTitle}>Price: </Text>
										<Text style={styles.textTitle}>R${magicItem.rarity.name},00</Text>
									</View>
								</View>
								<View style={styles.descriptionContainer}>
									<Text style={styles.textTitle}>
										Descrição:
									</Text>
									<Text style={styles.text}>
										{ magicItem.desc[0] }
									</Text>
								</View>
							</ScrollView>
						</>
				}
			</View>
		</View>
	</Modal>
}