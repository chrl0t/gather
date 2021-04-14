import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { textWithoutEncoding } from "react-native-communications";
import MapView, { Marker, Callout } from "react-native-maps";
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
        key={1}
        title={"Wild Garlic"}
        description={"Foraged on 04/04/21"}
        coordinate={{ latitude: 54.54871, longitude: -1.24906 }}
      >
        <CustomMarker />
      </Marker>
      <Marker
        key={2}
        title={"Cherry Blossom"}
        description={"Foraged on 14/04/21"}
        coordinate={{ latitude: 54.54943, longitude: -1.25252 }}
      >
        <CustomMarker />
      </Marker>
      <Marker
        key={3}
        title={"Nettle"}
        description={"Foraged on 12/03/21"}
        coordinate={{ latitude: 54.55019, longitude: -1.244 }}
      >
        <CustomMarker />
      </Marker>
      <Marker
        key={4}
        title={"Wild Garlic"}
        description={"Foraged on 29/03/21"}
        coordinate={{ latitude: 54.54392, longitude: -1.25251 }}
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
