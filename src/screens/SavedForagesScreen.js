import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import SavedCard from "../components/SavedCard";

const SavedForagesScreen = () => {
  const savedItems = [
    { id: 1, name: "Saved Forages" },
    { id: 2, name: "Saved Recipes" }
  ];
  return (
    <View>
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
    </View>
  );
};
const styles = StyleSheet.create({});

export default SavedForagesScreen;
