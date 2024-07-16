import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import TextAndReview from "./ProductComponent/TextAndReview ";

const CardProduct = () => {
  return (
    <View style={styles.container}>
      <Image source={require("./../image/r99.png")} style={styles.Image} />
      <View style={styles.Card}>
        <TextAndReview />
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
  Image: {
    width: 415,
    height: 520,
  },
  Card: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 20,
    marginTop: -30,
    borderRadius: 30,
    backgroundColor: "#ffff",
  },
});

export default CardProduct;
