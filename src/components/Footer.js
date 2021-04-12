import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Footer = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Saved");
        }}
      >
        <Text style={styles.title}>My Foraging Spots</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingBottom: 25,
    backgroundColor: "#3C754C"
  },
  title: {
    fontSize: 35,
    textAlign: "center",
    fontFamily: "KohinoorDevanagari-Light",
    color: "white"
  }
});

export default Footer;
