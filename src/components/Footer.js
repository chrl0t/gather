import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Foraging Spots</Text>
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
