import React from 'react';
import { Dimensions, StyleSheet, Text, View, ScrollView } from 'react-native';
import { useState } from 'react/cjs/react.development';
import PillButton from '../../components/PillButton';
import { useNavigation } from '@react-navigation/native';

const RefillScreen = props => {
    const navigation = useNavigation();
    const [remainingWater, setRemainingWater] = useState(10);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View>
                <Text style={styles.h2}>
                    <Text>You have </Text>
                    <Text style={styles.bold}>{remainingWater} </Text>
                    <Text>liters of water remaining</Text>
                </Text>
            </View>
            <View style={styles.buttonView}>
                <PillButton style={styles.refillButton} onPress={() => navigation.navigate('RefillMap')}>Refill</PillButton>
            </View>
            <View style={styles.mapContainer}>
                <Text style={{ ...styles.h2, ...styles.mapHeading }}>Nearby Refilling Stations</Text>
                <View style={styles.mapView}></View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingTop: 40
    },
    h2: {
        fontSize: 20
    },
    bold: {
        fontWeight: 'bold'
    },
    buttonView: {
        paddingVertical: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    refillButton: {
        width: Dimensions.get('window').width * 0.7,
        height: 60,
    },
    mapHeading: {
        paddingBottom: 30
    },
    mapView: {
        width: Dimensions.get('window').width * 0.85,
        height: Dimensions.get('window').width * 0.85,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default RefillScreen;