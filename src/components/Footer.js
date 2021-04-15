import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const Footer = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Feather name='home' size={45} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Map");
        }}
      >
        <Feather style={styles.icon} size={45} name='map-pin' />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Saved");
        }}
      >
        <Feather style={styles.icon} name='heart' size={45} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingBottom: 25,
    backgroundColor: "#3C754C",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  icon: {
    color: "white"
  }
});

export default Footer;
