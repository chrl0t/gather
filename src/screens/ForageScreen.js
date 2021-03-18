import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useEffect } from "react/cjs/react.development";
import { db } from "../firebase/config";

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
    async function fetchData() {
      const foragesRef = db.collection("forages").where("id", "==", id);
      const snapshot = await foragesRef.get();
      let forageInfo = {};
      snapshot.forEach((doc) => {
        forageInfo = doc.data();
      });
      setName(forageInfo.name);
      setLatin(forageInfo.latin);
      setDescription(forageInfo.description);
      setIdentification(forageInfo.identification);
      setImage(forageInfo.mainimage);
    }
    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.latinTitle}>{latin}</Text>
      <Image style={styles.image} source={{ uri: image }} />
      <Text style={styles.identification}>Description:</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.identification}>Identification:</Text>
      <Text style={styles.description}>{identification}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 210,
    height: 250,
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
  }
});

export default ForageScreen;
