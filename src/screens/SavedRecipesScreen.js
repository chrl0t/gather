import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList
} from "react-native";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import RecipeCard from "../components/RecipeCard";
import { fetchListOfSavedRecipes } from "../api/firestore";

const SavedRecipesScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const loadRecipes = async () => {
      const recipes = await fetchListOfSavedRecipes();
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
        <Text style={styles.title}>Saved Recipes</Text>
        <ScrollView>
          {recipes.map((recipe) => {
            return (
              <RecipeCard
                title={recipe.title}
                image={recipe.image}
                url={recipe.url}
                key={recipe.url}
                healthLabel={recipe.healthLabel}
                bin={true}
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

export default SavedRecipesScreen;
