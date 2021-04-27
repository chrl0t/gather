import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Footer from "../components/Footer";

const SavedForagesScreen = ({ navigation }) => {
  return (
    <View>
      <View style={styles.container}>
        <Text>Saved Forages</Text>
      </View>
      <Footer navigation={navigation} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: "90%"
  }
});

export default SavedForagesScreen;
