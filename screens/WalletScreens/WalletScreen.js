import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import ListItem from '../../components/ListItem';
import PillButton from '../../components/PillButton';
import Credit from '../../components/Credit';
import Debit from '../../components/Debit';
import { useNavigation } from '@react-navigation/native';

const WalletScreen = props => {
    const navigation = useNavigation();
    const [walletAmount, setWalletAmount] = useState(12345);
    const checkIfDebit = (amount) => {
        if (amount >= 0) {
            return <Debit>{amount}</Debit>
        }
        else {
            return <Credit> {Math.abs(amount)} </Credit>
        }
    }
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View>
                <Text style={styles.h2}>You have in your wallet:</Text>
                <Debit style={styles.h1}>Rs. {walletAmount}</Debit>
                <View style={styles.buttonView}>
                    <PillButton onPress={() => navigation.navigate('Withdrawal')}> Withdraw</PillButton>
                </View>
            </View>
            <View>
                <Text style={styles.h2}>Recent Transactions</Text>
                <View style={styles.listItems}>
                    <ListItem style={styles.listItem}>
                        <Text>Order Completed</Text>
                        {checkIfDebit(500)}
                    </ListItem>
                    <ListItem style={styles.listItem}>
                        <Text>Amount Withdrawn</Text>
                        {checkIfDebit(-2000)}
                    </ListItem>
                    <ListItem style={styles.listItem}>
                        <Text>Hello</Text>
                        {checkIfDebit(500)}
                    </ListItem>
                </View>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        paddingTop: 40
    },
    h2: {
        fontSize: 20
    },
    h1: {
        fontSize: 30
    },
    buttonView: {
        paddingVertical: 30,
        alignItems: 'flex-end'
    },
    debit: {
        color: 'green',
        fontWeight: 'bold'
    },
    credit: {
        color: 'red',
        fontWeight: 'bold'
    },
    listItems: {
        paddingTop: 30
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    }
});

export default WalletScreen;