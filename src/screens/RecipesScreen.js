import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import { mutateName } from "../utils/mutate-name";
import { checkIfVeg } from "../utils/check-if-veg";
import { fetchRecipes } from "../api/edamam";
import RecipeCard from "../components/RecipeCard";
import Loading from "../components/Loading";
import Footer from "../components/Footer";

const RecipesScreen = ({ navigation }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const name = navigation.getParam("name");
  const ingredient = mutateName(name);

  useEffect(() => {
    const loadRecipes = async () => {
      const recipes = await fetchRecipes(ingredient);
      setRecipes(recipes);
      setLoading(false);
    };
    loadRecipes();
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
                key={recipe.recipe.uri}
                healthLabel={checkIfVeg(recipe.recipe.healthLabels)}
                heart={true}
              />
            );
          })}
        </ScrollView>
        <Footer navigation={navigation} />
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
