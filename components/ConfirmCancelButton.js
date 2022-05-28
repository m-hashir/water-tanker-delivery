import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const ConfirmCancelButton = props => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View>
                <Ionicons
                    name={props.choice == 'confirm' ? 'checkmark-outline' : 'close-outline'}
                    size={40}
                    color={props.choice == 'confirm' ? 'green' : 'red'} />
            </View>
        </TouchableOpacity>
    )
}

export default ConfirmCancelButton;
