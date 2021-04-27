import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Footer from "../components/Footer";

const SavedRecipesScreen = ({ navigation }) => {
  return (
    <View>
      <View style={styles.container}>
        <Text>Saved Recipes</Text>
      </View>
      <Footer navigation={navigation} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: "90%"
  }
});

export default SavedRecipesScreen;
