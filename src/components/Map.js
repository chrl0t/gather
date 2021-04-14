import React from "react";
import { StyleSheet, View, Text } from "react-native";
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
      <Marker key={1} coordinate={{ latitude: 54.54871, longitude: -1.24906 }}>
        <CustomMarker />
        <Callout tooltip>
          <View>
            <Text>Wild Garlic</Text>
          </View>
        </Callout>
      </Marker>
      <Marker key={2} coordinate={{ latitude: 54.54943, longitude: -1.25252 }}>
        <CustomMarker />
        <Callout tooltip>
          <View>
            <Text>Wild Garlic</Text>
          </View>
        </Callout>
      </Marker>
      <Marker key={3} coordinate={{ latitude: 54.55019, longitude: -1.244 }}>
        <CustomMarker />
        <Callout tooltip>
          <View>
            <Text>Wild Garlic</Text>
          </View>
        </Callout>
      </Marker>
      <Marker key={4} coordinate={{ latitude: 54.54392, longitude: -1.25251 }}>
        <CustomMarker />
        <Callout tooltip>
          <View>
            <Text>Wild Garlic</Text>
          </View>
        </Callout>
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
