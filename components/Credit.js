import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Credit = props => {
    return (
        <Text style={{ ...styles.credit, ...props.style }}>
            {props.children}
        </Text>
    )
}

const styles = StyleSheet.create({
    credit: {
        color: 'red',
        fontWeight: 'bold'
    }
})

export default Credit;