import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Map from "../components/Map";
import Footer from "../components/Footer";

const SavedForagesScreen = ({ navigation }) => {
  return (
    <View>
      <Map />
      <Footer navigation={navigation} />
    </View>
  );
};
const styles = StyleSheet.create({});

export default SavedForagesScreen;
