import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { BottomTabRoutes } from './BottomTabNavigator';
import { CartProvider } from '../context/CartContext';

export const Routes = () => {
	return <NavigationContainer>
			<BottomTabRoutes />
	</NavigationContainer>
}