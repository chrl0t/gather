import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";
import Loading from "../components/Loading";

const HomeScreen = () => {
  const [loading, setLoading] = useState(true);
  if (loading) {
    return <Loading />;
  } else {
    return (
      <View style={styles.container}>
        <Header />
        <Text style={styles.title}>What's in season right now...</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#167F5F",
    height: "100%"
  },
  title: {
    color: "white",
    padding: 10,
    fontSize: 20,
    fontFamily: "KohinoorDevanagari-Light",
    textAlign: "center"
  }
});

export default HomeScreen;
