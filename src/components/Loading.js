import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Loading = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#167F5F",
    height: "100%",
    justifyContent: "space-between"
  },
  title: {
    fontFamily: "KohinoorDevanagari-Light",
    textAlign: "center",
    fontSize: 80,
    color: "white",
    paddingTop: "70%"
  }
});

export default Loading;
