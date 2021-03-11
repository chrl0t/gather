import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { db } from "../firebase/config";
import Loading from "../components/Loading";
import Header from "../components/Header";
import ForageCard from "../components/ForageCard";

const HomeScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [forages, setForages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const foragesRef = db.collection("forages");
      const snapshot = await foragesRef.get();
      const fetchedForages = [];
      snapshot.forEach((doc) => {
        const forage = doc.data();
        fetchedForages.push(forage);
      });
      setForages(fetchedForages);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <View style={styles.container}>
        <Header />
        <Text style={styles.title}>What's in season right now...</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Forage");
          }}
        >
          <ForageCard forages={forages} />
        </TouchableOpacity>
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
