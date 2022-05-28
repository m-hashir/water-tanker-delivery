import React from 'react';
import { } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreens/HomeScreen';
import HomeDemoScreen from '../../screens/HomeScreens/HomeDemoScreen'

const HomeStack = createNativeStackNavigator();
const HomeStackScreen = props => {
    return (
        <HomeStack.Navigator initialRouteName="HomeStack"
            screenOptions={{ headerShown: false }} >
            <HomeStack.Screen name="HomeStack" component={HomeScreen} />
            <HomeStack.Screen name="Demo" component={HomeDemoScreen} />
        </HomeStack.Navigator>
    )
}

export default HomeStackScreen;