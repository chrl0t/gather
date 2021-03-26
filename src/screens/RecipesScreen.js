import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RecipesScreen = ({ navigation }) => {
  const name = navigation.getParam("name");
  const fetchName = name.toLowerCase();
  return (
    <View>
      <Text>{name}</Text>
      <Text>{fetchName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default RecipesScreen;
