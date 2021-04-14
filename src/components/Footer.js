import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const Footer = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Saved");
        }}
      >
        <Feather style={styles.icon} size={45} name='map-pin' />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingBottom: 25,
    backgroundColor: "#3C754C",
    alignItems: "center"
  },
  icon: {
    color: "white"
  }
});

export default Footer;
