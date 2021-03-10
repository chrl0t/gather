import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { determineSeason } from "../utils/check-season";

const Header = () => {
  const [season, setSeason] = useState("");

  const date = new Date();
  const month = date.getMonth();

  useEffect(() => {
    setSeason(determineSeason(month));
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>It's {season}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#3C754C"
  },
  title: {
    fontSize: 50,
    textAlign: "center",
    fontFamily: "KohinoorDevanagari-Light",
    color: "white"
  }
});

export default Header;
