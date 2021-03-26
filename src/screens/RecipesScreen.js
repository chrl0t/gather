import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { mutateName } from "../utils/mutate-name";

const RecipesScreen = ({ navigation }) => {
  const name = navigation.getParam("name");
  const fetchName = mutateName(name);
  return (
    <View>
      <Text>{name}</Text>
      <Text>{fetchName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default RecipesScreen;
