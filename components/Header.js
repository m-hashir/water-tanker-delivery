import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Colors from '../constants/Colors';
const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.icon}>Paani</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 85,
        paddingTop: 36,
        backgroundColor: Colors.primary,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        fontSize: 20,
        color: 'white'
    }

})
export default Header;