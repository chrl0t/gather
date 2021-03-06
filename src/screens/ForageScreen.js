import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useEffect } from "react/cjs/react.development";
import { fetchForage } from "../api/firestore";
import { Feather } from "@expo/vector-icons";
import Loading from "../components/Loading";
import Footer from "../components/Footer";

const ForageScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [latin, setLatin] = useState("");
  const [description, setDescription] = useState("");
  const [identification, setIdentification] = useState("");
  const [image, setImage] = useState(
    "https://i1.wp.com/www.cssscript.com/wp-content/uploads/2014/10/iOS-OS-X-Style-Pure-CSS-Loading-Spinner.jpg?fit=400%2C300&ssl=1"
  );
  const [loading, setLoading] = useState(true);
  const id = navigation.getParam("id");

  useEffect(() => {
    const loadForage = async () => {
      const forage = await fetchForage(id);
      const { name, latin, description, identification, image } = forage;
      setName(name);
      setLatin(latin);
      setDescription(description);
      setIdentification(identification);
      setImage(image);
      setLoading(false);
    };
    loadForage();
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.latinTitle}>{latin}</Text>
        <Image style={styles.image} source={{ uri: image }} />
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.identification}>Identification:</Text>
        <Text style={styles.description}>{identification}</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Recipes", { name });
          }}
        >
          <Text style={styles.recipes}>Click here for recipes</Text>
        </TouchableOpacity>
        <Footer navigation={navigation} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 270,
    alignSelf: "center",
    margin: 15
  },
  title: {
    alignSelf: "center",
    fontSize: 25,
    fontFamily: "KohinoorDevanagari-Light",
    fontWeight: "500",
    margin: 5
  },
  latinTitle: {
    fontSize: 15,
    alignSelf: "center",
    fontFamily: "KohinoorDevanagari-Light"
  },
  identification: {
    fontFamily: "KohinoorDevanagari-Light",
    fontWeight: "600",
    alignSelf: "center",
    padding: 10
  },
  description: {
    fontFamily: "KohinoorDevanagari-Light",
    textAlign: "center",
    margin: 6
  },
  recipes: {
    fontFamily: "KohinoorDevanagari-Light",
    fontWeight: "600",
    fontSize: 20,
    alignSelf: "center",
    padding: 10,
    color: "#3C754C"
  }
});

export default ForageScreen;
