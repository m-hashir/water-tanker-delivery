import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors'

import HomeStackScreen from './StackNavigation/HomeStackScreen';
import OrdersStackScreen from './StackNavigation/OrdersStackScreen'
import WalletStackScreen from './StackNavigation/WalletStackScreen'
import RefillStackScreen from './StackNavigation/RefillStackScreen'
import ProfileStackScreen from './StackNavigation/ProfileStackScreen'

const Tab = createBottomTabNavigator();
const TabNavigator = props => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={
                ({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline';
                        }
                        else if (route.name === 'Orders') {
                            iconName = focused ? 'list-circle' : 'list-circle-outline';
                        }
                        else if (route.name === 'Wallet') {
                            iconName = focused ? 'wallet' : 'wallet-outline';
                        }
                        else if (route.name === 'Refill') {
                            iconName = focused ? 'water' : 'water-outline';
                        }
                        else if (route.name === 'Profile') {
                            iconName = focused ? 'person' : 'person-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: Colors.primary,
                    tabBarInactiveTintColor: 'gray',
                    headerShown: false
                })
            }>
                <Tab.Screen name="Home" component={HomeStackScreen} />
                <Tab.Screen name="Orders" component={OrdersStackScreen} />
                <Tab.Screen name="Wallet" component={WalletStackScreen} />
                <Tab.Screen name="Refill" component={RefillStackScreen} />
                <Tab.Screen name="Profile" component={ProfileStackScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
export default TabNavigator;