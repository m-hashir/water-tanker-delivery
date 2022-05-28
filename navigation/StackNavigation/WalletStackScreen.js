import React from 'react';
import { } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WalletScreen from '../../screens/WalletScreens/WalletScreen';
import WithdrawalScreen from '../../screens/WalletScreens/WithdrawalScreen'

const WalletStack = createNativeStackNavigator();
const WalletStackScreen = props => {
    return (
        <WalletStack.Navigator initialRouteName="WalletStack"
            screenOptions={{ headerShown: false }} >
            <WalletStack.Screen name="WalletStack" component={WalletScreen} />
            <WalletStack.Screen name="Withdrawal" component={WithdrawalScreen} />
        </WalletStack.Navigator>
    )
}

export default WalletStackScreen;