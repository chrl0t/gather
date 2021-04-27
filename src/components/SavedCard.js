import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SavedCard = ({ savedItem }) => {
  const { name } = savedItem;
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SavedCard;
