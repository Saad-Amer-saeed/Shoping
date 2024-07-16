import React from "react";
import { View, StyleSheet, Image } from "react-native";
import TextAndReview from "./ProductComponent/TextAndReview ";
import ColorAndSize from "./ProductComponent/ColorAndSize";
import DescriptionComponent from "./ProductComponent/DescriptionComponent "; // Import the new component
import ReviewComponent from "./ProductComponent/ReviewComponent";
const CardProduct = () => {
  const description = "Description"; // Set your dynamic description

  return (
    <View style={styles.container}>
      <Image source={require("./../image/r99.png")} style={styles.image} />
      <View style={styles.card}>
        <TextAndReview />
        <ColorAndSize />
        <DescriptionComponent description={description} />
        <ReviewComponent description={"Review"} />
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
