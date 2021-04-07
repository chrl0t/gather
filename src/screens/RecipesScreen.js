import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { mutateName } from "../utils/mutate-name";
import { fetchRecipes } from "../api/edamam";
import Communications from "react-native-communications";
import RecipeCard from "../components/RecipeCard";

const RecipesScreen = ({ navigation }) => {
  const [recipes, setRecipes] = useState([]);
  // const [recipeTitle, setRecipeTitle] = useState("");
  // const [recipeImage, setRecipeImage] = useState(
  //   "http://generousdeluxe.weebly.com/uploads/1/2/3/9/123925667/870805048.jpg"
  // );
  // const [recipeLink, setRecipeLink] = useState("");
  const name = navigation.getParam("name");
  const ingredient = mutateName(name);

  useEffect(() => {
    fetchRecipes(ingredient, setRecipes);
  }, []);
  return (
    <View>
      {recipes.map((recipe) => {
        return (
          <RecipeCard
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            url={recipe.recipe.url}
          />
        );
      })}
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
