import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapBoxGL from "@react-native-mapbox-gl/maps";
import GetLocation from 'react-native-get-location';
import MapboxNavigation from '@homee/react-native-mapbox-navigation'

const RefillMapScreen = props => {
    const [coordinates, setCoordinates] = useState([0, 0]);
    MapBoxGL.setAccessToken("sk.eyJ1IjoiaGFzaGlyNTAyNSIsImEiOiJja3QxNDFyNHQwNm9pMm9waHp1ZjJ0ZzJ1In0.7PP7GueTWMD62cu9959lYw")
    MapBoxGL.setConnected(true);

    const getLocation = () => {
        if (coordinates[0] === 0 && coordinates[1] === 0) {
            GetLocation.getCurrentPosition({
                enableHighAccuracy: true,
                timeout: 15000,
            })
                .then(location => {
                    let currentCoordinates = [];
                    currentCoordinates.push(location.longitude)
                    currentCoordinates.push(location.latitude)
                    setCoordinates(currentCoordinates)

                })
                .catch(error => {
                    const { code, message } = error;
                    console.warn(code, message);
                })
        } else return null;
    }
    useEffect(getLocation);

    return (
        <View style={styles.mapView}>
            {/* <MapboxGL.MapView
                style={{ flex: 1 }}
                onPress={(event) => setCoordinates(event.geometry.coordinates)}>
                <MapBoxGL.Camera
                    zoomLevel={15}
                    maxZoomLevel={25}
                    centerCoordinate={coordinates} />
                <MapBoxGL.PointAnnotation coordinate={coordinates} />
            </MapboxGL.MapView> */}
            <MapboxNavigation
                origin={coordinates}
                destination={[73.0553, 33.6601]}
                shouldSimulateRoute={true}
                showsEndOfRouteFeedback={true}
                onLocationChange={(event) => {
                    const { latitude, longitude } = event.nativeEvent;
                }}
                onRouteProgressChange={(event) => {
                    const {
                        distanceTraveled,
                        durationRemaining,
                        fractionTraveled,
                        distanceRemaining,
                    } = event.nativeEvent;
                }} />
        </View>
    )
}

const styles = StyleSheet.create({
    mapView: {
        width: Dimensions.get('window').width,
        height: 500,
        borderColor: 'black',
        borderWidth: 1
    }
})

export default RefillMapScreen;

//33.642252,72.990579