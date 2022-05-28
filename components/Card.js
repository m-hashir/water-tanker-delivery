import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const Card = props => {
    return (
        <View style={styles.container}>
            <View style={{ ...styles.card, ...props.style }}>
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    card: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 15,
        width: Dimensions.get('window').width * 0.85,
        height: 200,
        padding: 10
    }
})

export default Card;