import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList
} from "react-native";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import ForageCard from "../components/ForageCard";
import { fetchListOfSavedForages } from "../api/firestore";

const SavedForagesScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [forages, setForages] = useState([]);

  useEffect(() => {
    const loadForages = async () => {
      const forages = await fetchListOfSavedForages();
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
        <Text style={styles.title}>Saved Forages</Text>
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
                <ForageCard forage={item} heart={false} />
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

export default SavedForagesScreen;
