import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Communications from "react-native-communications";

const RecipeCard = ({ title, image, url, healthLabel }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Image style={styles.image} source={{ uri: image }} />
      <Text>{healthLabel}</Text>
      <TouchableOpacity onPress={() => Communications.web(url)}>
        <Text>Click here for full recipe</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 270,
    alignSelf: "center",
    margin: 15
  },
  title: {
    textTransform: "capitalize"
  }
});

export default RecipeCard;
