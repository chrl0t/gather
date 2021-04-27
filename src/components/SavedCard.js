import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SavedCard = ({ savedItem }) => {
  const { name } = savedItem;
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    height: 200,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10
  },
  name: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#3C754C",
    alignSelf: "center"
  }
});

export default SavedCard;
