import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const ImageView = props => {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width / 3,
        height: Dimensions.get('window').width / 3,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: Dimensions.get('window').width / 6
    }
})

export default ImageView;