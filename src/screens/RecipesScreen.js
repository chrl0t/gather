import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { mutateName } from "../utils/mutate-name";
import { fetchRecipes } from "../api/edamam";
import Communications from "react-native-communications";

const RecipesScreen = ({ navigation }) => {
  const [recipeTitle, setRecipeTitle] = useState("");
  const [recipeImage, setRecipeImage] = useState(
    "https://cdn.cnn.com/cnnnext/dam/assets/200319162747-family-cooking-stock-super-tease.jpg"
  );
  const [recipeLink, setRecipeLink] = useState("");
  const name = navigation.getParam("name");
  const ingredient = mutateName(name);

  useEffect(() => {
    fetchRecipes(ingredient, setRecipeTitle, setRecipeImage, setRecipeLink);
  }, []);
  return (
    <View>
      <Text>{name}</Text>
      <Text>{ingredient}</Text>
      <Text>{recipeTitle}</Text>
      <Image style={styles.image} source={{ uri: recipeImage }} />
      <TouchableOpacity onPress={() => Communications.web(recipeLink)}>
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
  }
});

export default RecipesScreen;
