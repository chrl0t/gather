import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import { mutateName } from "../utils/mutate-name";
import { checkIfVeg } from "../utils/check-if-veg";
import { fetchRecipes } from "../api/edamam";
import RecipeCard from "../components/RecipeCard";
import Loading from "../components/Loading";

const RecipesScreen = ({ navigation }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const name = navigation.getParam("name");
  const ingredient = mutateName(name);

  useEffect(() => {
    fetchRecipes(ingredient, setRecipes, setLoading);
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{name} Recipes</Text>
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
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3C754C",
    height: "100%"
  },
  title: {
    fontSize: 40,
    textAlign: "center",
    fontFamily: "KohinoorDevanagari-Light",
    color: "white"
  }
});

export default RecipesScreen;
