// CartButton.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CartButton = () => {
  return (
    <View style={styles.button}>
      <Ionicons name="bag-check" size={24} color="#ffff" />
      <Text style={styles.text}>Add To Cart</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#343434",
    borderRadius: 21,
    paddingVertical: 17,
  },
  text: {
    color: "#ffff",
    fontSize: 20,
    marginLeft: 10,
    fontWeight: "bold",
  },
});

export default CartButton;
