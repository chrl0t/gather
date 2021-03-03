import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  const [season, setSeason] = useState("");

  const date = new Date();
  const month = date.getMonth();

  const determineSeason = (passedMonth) => {
    let season = "";
    if (passedMonth === 11 || passedMonth === 0 || passedMonth === 1) {
      season += "Winter";
    } else if (passedMonth === 2 || passedMonth === 3 || passedMonth === 4) {
      season += "Spring";
    } else if (passedMonth === 5 || passedMonth === 6 || passedMonth === 7) {
      season += "Summer";
    } else if (passedMonth === 8 || passedMonth === 9 || passedMonth === 10) {
      season += "Autumn";
    }
    return season;
  };

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
    padding: 10
  },
  title: {
    fontSize: 50,
    textAlign: "center",
    fontFamily: "KohinoorDevanagari-Light"
  }
});

export default Header;
