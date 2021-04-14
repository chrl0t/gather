import React from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import CustomMarker from "./CustomMarker";

const Map = () => {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 54.5496,
        longitude: -1.2509,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02
      }}
    >
      <Marker
        coordinate={{ latitude: 54.54871, longitude: -1.24906 }}
        onPress={() => console.log("hi")}
      >
        <CustomMarker />
      </Marker>
      <Marker
        coordinate={{ latitude: 54.54943, longitude: -1.25252 }}
        onPress={() => console.log("hi")}
      >
        <CustomMarker />
      </Marker>
      <Marker
        coordinate={{ latitude: 54.55019, longitude: -1.244 }}
        onPress={() => console.log("hi")}
      >
        <CustomMarker />
      </Marker>
      <Marker
        coordinate={{ latitude: 54.54392, longitude: -1.25251 }}
        onPress={() => console.log("hi")}
      >
        <CustomMarker />
      </Marker>
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: "100%"
  }
});

export default Map;
