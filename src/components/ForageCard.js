import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { postFavouriteForage } from "../api/firestore";
import { Feather } from "@expo/vector-icons";

const ForageCard = ({ forage, heart, bin }) => {
  const { name, availability, locations, warnings, image } = forage;
  const needHeartIcon = heart;
  const needBinIcon = bin;

  const onPress = () => postFavouriteForage(forage);

  let heartIcon = null;
  let binIcon = null;

  if (needHeartIcon) {
    heartIcon = (
      <TouchableOpacity onPress={onPress}>
        <Feather size={30} name='heart' style={styles.heartIcon} />
      </TouchableOpacity>
    );
  }

  if (needBinIcon) {
    binIcon = (
      <TouchableOpacity>
        <Feather size={30} name='trash-2' style={styles.binIcon} />
      </TouchableOpacity>
    );
  }

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
        {heartIcon}
        {binIcon}
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
  },
  heartIcon: {
    alignSelf: "center",
    paddingTop: 10
  },
  binIcon: {
    alignSelf: "center",
    paddingTop: 10,
    color: "black"
  }
});

export default ForageCard;
