import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import Communications from "react-native-communications";
import { postFavouriteRecipe } from "../api/firestore";

const RecipeCard = ({ title, image, url, healthLabel, heart }) => {
  const needIcon = heart;

  const onPress = () => postFavouriteRecipe(title, image, url, healthLabel);

  let icon = null;
  if (needIcon) {
    icon = (
      <TouchableOpacity onPress={onPress}>
        <Feather size={30} name='heart' style={styles.icon} />
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: image }} />
        {icon}
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        {healthLabel ? (
          <Text style={styles.healthLabel}>{healthLabel}</Text>
        ) : null}
        <TouchableOpacity onPress={() => Communications.web(url)}>
          <Text style={styles.link}>Click here for full recipe</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    marginTop: 10,
    borderWidth: 2,
    borderColor: "white",
    height: 240,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  infoContainer: {
    flexDirection: "column",
    width: "65%",
    paddingLeft: 20
  },
  imageContainer: {
    flexDirection: "column",
    width: "25%",
    padding: 10,
    paddingTop: 40
  },
  image: {
    width: 120,
    height: 120,
    paddingTop: 20
  },
  title: {
    textTransform: "capitalize",
    fontSize: 27,
    fontFamily: "KohinoorDevanagari-Light",
    fontWeight: "bold",
    paddingBottom: 10
  },
  healthLabel: {
    fontFamily: "KohinoorDevanagari-Light",
    paddingBottom: 10,
    fontSize: 18
  },
  link: {
    fontFamily: "KohinoorDevanagari-Light",
    fontSize: 18,
    color: "#3C754C",
    fontWeight: "bold"
  },
  icon: {
    alignSelf: "center",
    paddingTop: 10
  }
});

export default RecipeCard;
