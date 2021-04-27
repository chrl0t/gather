import React from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import SavedCard from "../components/SavedCard";
import Footer from "../components/Footer";

const SavedScreen = ({ navigation }) => {
  const savedItems = [
    { id: "SavedForages", name: "Saved Forages" },
    { id: "SavedRecipes", name: "Saved Recipes" }
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={savedItems}
        keyExtractor={(result) => result.name}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(item.id);
              }}
            >
              <SavedCard savedItem={item} />
            </TouchableOpacity>
          );
        }}
      ></FlatList>
      <Footer navigation={navigation} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
    paddingTop: 20
  }
});

export default SavedScreen;
