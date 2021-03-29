import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useEffect } from "react/cjs/react.development";
import { fetchForage } from "../api/firestore";

const ForageScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [latin, setLatin] = useState("");
  const [description, setDescription] = useState("");
  const [identification, setIdentification] = useState("");
  const [image, setImage] = useState(
    "https://i1.wp.com/www.cssscript.com/wp-content/uploads/2014/10/iOS-OS-X-Style-Pure-CSS-Loading-Spinner.jpg?fit=400%2C300&ssl=1"
  );
  const id = navigation.getParam("id");

  useEffect(() => {
    fetchForage(
      id,
      setName,
      setLatin,
      setDescription,
      setIdentification,
      setImage
    );
  }, []);
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
    </View>
  );
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
    padding: 10
  }
});

export default ForageScreen;
