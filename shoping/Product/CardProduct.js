import React from "react";
import { View, StyleSheet, Image } from "react-native";
import TextAndReview from "./ProductComponent/TextAndReview ";
import ColorAndSize from "./ProductComponent/ColorAndSize";

const CardProduct = () => {
  return (
    <View style={styles.container}>
      <Image source={require("./../image/r99.png")} style={styles.image} />
      <View style={styles.card}>
        <TextAndReview />
        <ColorAndSize />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#E1E6E2",
  },
  image: {
    width: 415,
    height: 520,
  },
  card: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 20,
    marginTop: -30,
    borderRadius: 30,
    backgroundColor: "#fff",
  },
});

export default CardProduct;
