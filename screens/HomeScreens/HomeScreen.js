import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import ImageView from '../../components/ImageView';
import Card from '../../components/Card';
import ConfirmCancelButton from '../../components/ConfirmCancelButton';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = (props) => {
    const navigation = useNavigation();
    return (
        <ScrollView style={styles.screen}>
            <View style={styles.welcome}>
                <View>
                    <Text style={styles.h2}>Welcome</Text>
                    <Text style={styles.h1}>John Doe</Text>
                </View>
                <ImageView />
            </View>
            <Card>
                <Text>You have 10 liters of water remaining</Text>
                <View style={styles.refillView}>
                    <Text>Refill?</Text>
                    <View style={styles.confirmCancel}>
                        <ConfirmCancelButton choice="confirm" onPress={() => navigation.navigate("Demo")} />
                        <ConfirmCancelButton choice="cancel" />
                    </View>
                </View>
            </Card>
            <View style={styles.recommendedOrders}>
                <Text style={styles.h2}>Recommended Orders</Text>
                <Card style={styles.orderCard}>
                    <Text>Order Number 1</Text>
                </Card>
                <Card style={styles.orderCard}>
                    <Text>Order Number 2</Text>
                </Card>
                <Card style={styles.orderCard}>
                    <Text>Order Number 3</Text>
                </Card>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    welcome: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        padding: 30
    },
    h2: {
        fontSize: 20
    },
    h1: {
        fontSize: 30
    },
    refillView: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    confirmCancel: {
        marginTop: 10,
        flexDirection: 'row'
    },
    recommendedOrders: {
        padding: 30
    },
    orderCard: {
        height: 100,
        margin: 10
    }
});

export default HomeScreen;