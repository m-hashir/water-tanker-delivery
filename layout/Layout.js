import React from 'react';
import { } from 'react-native';
import Header from '../components/Header';
import TabNavigator from '../navigation/TabNavigator'

const Layout = props => {
    return (
        <View>
            <Header />
            {props.children}
            < TabNavigator />
        </View>
    )
}

export default Layout;