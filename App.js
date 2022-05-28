import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreens/HomeScreen';
import OrdersScreen from './screens/OrdersScreens/OrdersScreen';
import WalletScreen from './screens/WalletScreens/WalletScreen';
import RefillScreen from './screens/RefillScreens/RefillScreen';
import ProfileScreen from './screens/ProfileScreens/ProfileScreen';
import TabNavigator from './navigation/TabNavigator';
export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <TabNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
