import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { mutateName } from "../utils/mutate-name";
import { checkIfVeg } from "../utils/check-if-veg";
import { fetchRecipes } from "../api/edamam";
import RecipeCard from "../components/RecipeCard";

const RecipesScreen = ({ navigation }) => {
  const [recipes, setRecipes] = useState([]);

  const name = navigation.getParam("name");
  const ingredient = mutateName(name);

  useEffect(() => {
    fetchRecipes(ingredient, setRecipes);
  }, []);
  return (
    <ScrollView>
      {recipes.map((recipe) => {
        return (
          <RecipeCard
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            url={recipe.recipe.url}
            key={recipe.recipe.label}
            healthLabel={checkIfVeg(recipe.recipe.healthLabels)}
          />
        );
      })}
    </ScrollView>
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
