import React from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import SavedCard from "../components/SavedCard";
import Footer from "../components/Footer";

const SavedForagesScreen = ({ navigation }) => {
  const savedItems = [
    { id: 1, name: "Saved Forages" },
    { id: 2, name: "Saved Recipes" }
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={savedItems}
        keyExtractor={(result) => result.name}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
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

export default SavedForagesScreen;
