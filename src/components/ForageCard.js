import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ForageCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Wild Garlic</Text>
        <Text style={styles.heading}>Available:</Text>
        <Text style={styles.info}>March - May</Text>
        <Text style={styles.heading}>Where:</Text>
        <Text style={styles.info}>Cemeteries, Parks, Woodland</Text>
        <Text style={styles.heading}>Caution:</Text>
        <Text style={styles.info}>
          This plant can grow alongside a poisonous one called Lords and Ladies
        </Text>
      </View>
      <Image
        style={styles.image}
        source={require("../images/wild-garlic.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderWidth: 2,
    borderColor: "white",
    height: 300,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  title: {
    fontSize: 30,
    fontFamily: "KohinoorDevanagari-Light",
    textAlign: "center",
    fontWeight: "bold"
  },
  image: {
    width: 175,
    height: "100%"
  },
  heading: {
    fontFamily: "KohinoorDevanagari-Light",
    fontSize: 20,
    fontWeight: "400"
  },
  info: {
    fontFamily: "KohinoorDevanagari-Light",
    fontSize: 12
  },
  infoContainer: {
    flexDirection: "column",
    width: "50%"
  }
});

export default ForageCard;
