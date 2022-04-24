import React, { useEffect, useState } from "react";
import { View, PermissionsAndroid, Alert, Text } from 'react-native'
import Geolocation from "react-native-geolocation-service";
import reactotron from "reactotron-react-native";
import MapView from 'react-native-maps';

import Loader from "../Common/Loader";
import styles from "../resources/Styles";

export default function MapViewComponent() {

    const [currentPosition, setCurrentPosition] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        accessCurrentPosition()
        displayAlert()
    }, [])

    const displayAlert = () => {
        Alert.alert(
            "Google Maps",
            "Since api key is not available can't display the map view",
            [
                {
                    text: "Okay",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
            ]
        );
    }
    const accessCurrentPosition = async () => {
        const hasLocationPermission = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
        if (hasLocationPermission === 'granted') {
            Geolocation.getCurrentPosition(
                (position) => {
                    reactotron.log(position);
                },
                (error) => {
                    // See error code charts below.
                    reactotron.log(error.code, error.message);
                },
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
            );
        }
    }

    if (loading) {
        return <Loader />
    }
    return <View style={[styles.flex1, styles.justifyCenter, styles.alignItemCenter]}>
        <Text>Maps</Text>
        {/* <MapView
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  /> */}
    </View>
}