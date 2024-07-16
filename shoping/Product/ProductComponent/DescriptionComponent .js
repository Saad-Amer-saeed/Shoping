// DescriptionComponent.js
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

const DescriptionComponent = ({ description }) => {
  return (
    <View style={styles.description}>
      <Text style={styles.text}>{description}</Text>
      <SimpleLineIcons name="arrow-right" size={20} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  description: {
    flex: 1,
    borderTopWidth: 1,
    borderColor: "#F3F3F6",
    marginTop: 40,
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default DescriptionComponent;
