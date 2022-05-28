import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Debit = props => {
    return (
        <Text style={{ ...styles.debit, ...props.style }}>
            {props.children}
        </Text>
    )
}

const styles = StyleSheet.create({
    debit: {
        color: 'green',
        fontWeight: 'bold'
    }
})

export default Debit;