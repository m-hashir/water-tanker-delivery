import React from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput } from 'react-native'

import PillButton from '../../components/PillButton';


const WithdrawalScreen = props => {
    return (
        <View style={styles.container}>
            <Text>Choose one of the following amounts to withdraw into your personal account:</Text>
            <View style={styles.buttonView}>
                <PillButton style={styles.button}>500</PillButton>
                <PillButton style={styles.button}>1000</PillButton>
            </View>
            <View style={styles.buttonView}>
                <PillButton style={styles.button}>2000</PillButton>
                <PillButton style={styles.button}>5000</PillButton>
            </View>

            <Text>Or enter the amount you wish to withdraw into your personal account:</Text>
            <View style={styles.inputView}>
                <TextInput keyboardType='phone-pad' style={styles.input} />
                <PillButton>Withdraw</PillButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        paddingTop: 40
    },
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingVertical: 20
    },
    button: {
        width: Dimensions.get('window').width * 0.35,
    },
    inputView: {
        width: Dimensions.get('window').width / 3,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        //borderColor: 'black',
        //borderWidth: 1
    },
    input: {
        borderBottomWidth: 1
    }
})

export default WithdrawalScreen;