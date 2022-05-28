import React from 'react';
import { } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../../screens/ProfileScreens/ProfileScreen';

const ProfileStack = createNativeStackNavigator();
const ProfileStackScreen = props => {
    return (
        <ProfileStack.Navigator initialRouteName="ProfileStack"
            screenOptions={{ headerShown: false }} >
            <ProfileStack.Screen name="ProfileStack" component={ProfileScreen} />
        </ProfileStack.Navigator>
    )
}

export default ProfileStackScreen;