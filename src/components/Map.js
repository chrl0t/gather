import React from "react";
import { Text, StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import CustomMarker from "./CustomMarker";

const Map = () => {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 54.5496,
        longitude: -1.2509,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
    >
      <Marker coordinate={{ latitude: 54.54871, longitude: -1.24906 }}>
        <CustomMarker />
      </Marker>
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});

export default Map;
