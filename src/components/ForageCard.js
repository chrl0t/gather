import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ForageCard = ({ forage }) => {
  const { name, availability, locations, warnings, image } = forage;
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.heading}>Available:</Text>
        <Text style={styles.info}>{availability}</Text>
        <Text style={styles.heading}>Where:</Text>
        <Text style={styles.info}>{locations}</Text>
        <Text style={styles.heading}>Caution:</Text>
        <Text style={styles.info}>{warnings}</Text>
      </View>
      <Image
        style={styles.image}
        source={{
          uri: image
        }}
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
    fontSize: 25,
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
    fontWeight: "400",
    padding: 3
  },
  info: {
    fontFamily: "KohinoorDevanagari-Light",
    fontSize: 12,
    paddingLeft: 3
  },
  infoContainer: {
    flexDirection: "column",
    width: "50%"
  }
});

export default ForageCard;
