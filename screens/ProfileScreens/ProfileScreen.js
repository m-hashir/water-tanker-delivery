import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import ImageView from '../../components/ImageView';
import PillButton from '../../components/PillButton';

const ProfileScreen = props => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.profileView}>
                <View>
                    <Text style={styles.h1}>John Doe</Text>
                    <Text style={styles.h2}>0334-1234567</Text>
                    <Text>Tap to Edit</Text>
                </View>
                <ImageView />
            </View>
            <View style={styles.signOutView}>
                <PillButton style={styles.signOutButton}>Sign Out</PillButton>
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
    h1: {
        fontSize: 30
    },
    h2: {
        fontSize: 20
    },
    profileView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 50
    },
    signOutView: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    signOutButton: {
        width: Dimensions.get('window').width * 0.7,
        height: 60,
    }

});

export default ProfileScreen;