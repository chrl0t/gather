import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "./Header";

const Loading = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Loading;
