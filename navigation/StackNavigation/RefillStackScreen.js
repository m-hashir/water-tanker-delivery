import React from 'react';
import { } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RefillScreen from '../../screens/RefillScreens/RefillScreen';
import RefillMapScreen from '../../screens/RefillScreens/RefillMapScreen';

const RefillStack = createNativeStackNavigator();
const RefillStackScreen = props => {
    return (
        <RefillStack.Navigator initialRouteName="RefillStack"
            screenOptions={{ headerShown: false }} >
            <RefillStack.Screen name="RefillStack" component={RefillScreen} />
            <RefillStack.Screen name="RefillMap" component={RefillMapScreen} />
        </RefillStack.Navigator>
    )
}

export default RefillStackScreen;