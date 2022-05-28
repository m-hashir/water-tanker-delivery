import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const ListItem = props => {
    return (
        <View style={{ ...styles.listItem, ...props.style }}>
            {props.children}
        </View>
    )
}
const styles = StyleSheet.create({
    listItem: {
        borderColor: 'black',
        borderWidth: 1,
        width: Dimensions.get('window').width * 0.85,
        height: 50
    }
})
export default ListItem;