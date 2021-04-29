import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from "react-native";
import Loading from "../components/Loading";
import Header from "../components/Header";
import ForageCard from "../components/ForageCard";
import Footer from "../components/Footer";
import { fetchListOfForages } from "../api/firestore";

const HomeScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [forages, setForages] = useState([]);
  const [season, setSeason] = useState("Spring");

  useEffect(() => {
    const loadForages = async () => {
      const forages = await fetchListOfForages(season);
      setForages(forages);
      setLoading(false);
    };
    loadForages();
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <View style={styles.container}>
        <Header />
        <Text style={styles.title}>What's in season right now...</Text>
        <FlatList
          data={forages}
          keyExtractor={(result) => result.name}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Forage", { id: item.id });
                }}
              >
                <ForageCard forage={item} heart={true} />
              </TouchableOpacity>
            );
          }}
        />
        <Footer navigation={navigation} />
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
