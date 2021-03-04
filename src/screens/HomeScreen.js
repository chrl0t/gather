import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Loading from "../components/Loading";
import Header from "../components/Header";
import ForageCard from "../components/ForageCard";

const HomeScreen = () => {
  const [loading, setLoading] = useState(false);
  if (loading) {
    return <Loading />;
  } else {
    return (
      <View style={styles.container}>
        <Header />
        <Text style={styles.title}>What's in season right now...</Text>
        <ForageCard />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3C754C",
    height: "100%"
  },
  title: {
    color: "white",
    padding: 5,
    fontSize: 20,
    fontFamily: "KohinoorDevanagari-Light",
    textAlign: "center"
  }
});

export default HomeScreen;
