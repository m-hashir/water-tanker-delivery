import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import PillButton from '../../components/PillButton';
import Card from '../../components/Card'
import ConfirmCancelButton from '../../components/ConfirmCancelButton';
import { useNavigation } from '@react-navigation/native';

const OrdersScreen = props => {
    const navigation = useNavigation();
    const [listItems, setListItems] = useState('ongoing');
    const ongoingPressHandler = () => {
        setListItems('ongoing')
    }
    const previousPressHandler = () => {
        setListItems('previous')
    }
    const toggleButtonsHandler = () => {
        if (listItems == 'ongoing') {
            return (<View style={styles.cardButtons}>
                <ConfirmCancelButton choice="confirm" />
                <ConfirmCancelButton choice="cancel" />
            </View>
            )
        }
        else return null
    }
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.pill}>
                <PillButton style={styles.ongoing} onPress={ongoingPressHandler} >Ongoing</PillButton>
                <PillButton style={styles.previous} onPress={previousPressHandler}>Previous</PillButton>
            </View>
            <Card style={styles.orderCard}>
                <Text>Order Number 1</Text>
                {toggleButtonsHandler()}
            </Card>
            <Card style={styles.orderCard}>
                <Text>Order Number 2</Text>
                {toggleButtonsHandler()}
            </Card>
            <Card style={styles.orderCard}>
                <Text>Order Number 3</Text>
                {toggleButtonsHandler()}
            </Card>
            <Card style={styles.orderCard}>
                <Text>Order Number 4</Text>
                {toggleButtonsHandler()}
            </Card>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    pill: {
        marginVertical: 30,
        flexDirection: 'row'
    },
    ongoing: {
        width: Dimensions.get('window').width / 3,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,

    },
    previous: {
        width: Dimensions.get('window').width / 3,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
    },
    orderCard: {
        marginVertical: 10,
        height: 150
    },
    cardButtons: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    }
});

export default OrdersScreen;