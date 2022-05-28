import React from 'react';
import { } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrdersScreen from '../../screens/OrdersScreens/OrdersScreen';

const OrdersStack = createNativeStackNavigator();
const OrdersStackScreen = props => {
    return (
        <OrdersStack.Navigator initialRouteName="OrdersStack"
            screenOptions={{ headerShown: false }} >
            <OrdersStack.Screen name="OrdersStack" component={OrdersScreen} />
        </OrdersStack.Navigator>
    )
}

export default OrdersStackScreen;