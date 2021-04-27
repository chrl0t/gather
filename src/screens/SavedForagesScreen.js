import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Footer from "../components/Footer";

const SavedForagesScreen = ({ navigation }) => {
  return (
    <View styles={styles.container}>
      <Text>Saved Forages</Text>
      <Footer navigation={navigation} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#3C754C"
  }
});

export default SavedForagesScreen;
