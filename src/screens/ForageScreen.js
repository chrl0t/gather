import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ForageScreen = () => {
  const [name, setName] = useState("Wild Garlic");
  const [latin, setLatin] = useState("Allium ursinum");
  const [description, setDescription] = useState(
    "Quite possibly the Godfather of all wild greens, the Steve Jobs of the onion family, The Beatles of foraged foods, wild garlic is the one to find as it's delicious, vibrant and versatile. A keen nose won't have any difficulty in sniffing out this plant's heady onion/garlic aroma. It always seems to grow in the most beautiful areas too, making it a joy to go looking for."
  );
  const [identification, setIdentification] = useState(
    "Ranging from 2-30 centimetres in height, wild garlic's bright green tapered leaves are best picked by the stem a coupole of centimetres up from the ground. Be careful not to uproot it, as you'll definitely want to return to the same spot to pick a few of its tall white flower heads for a salad garnish when they start to bloom, and even collect some green, spherical seed pod clusters at the end of the season for pickling."
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.latinTitle}>{latin}</Text>
      <Image
        style={styles.image}
        source={require("../images/wild-garlic-2.png")}
      />
      <Text style={styles.identification}>Description:</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.identification}>Identification:</Text>
      <Text style={styles.description}>{identification}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 300,
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
