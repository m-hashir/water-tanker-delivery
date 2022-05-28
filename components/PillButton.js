import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PillButton = props => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={{ ...styles.button, ...props.style }}>
                <Text>
                    {props.children}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: Dimensions.get('window').width / 2,
        height: 50,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default PillButton;