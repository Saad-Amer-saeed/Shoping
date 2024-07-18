import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import TextAndReview from "./ProductComponent/TextAndReview ";
import ColorAndSize from "./ProductComponent/ColorAndSize";
import DescriptionComponent from "./ProductComponent/DescriptionComponent ";
import ReviewComponent from "./ProductComponent/ReviewComponent";
import CartButton from "./ProductComponent/CartButton";
const CardProduct = () => {
  const description = "Description";
  return (
    <View style={styles.container}>
      <Image
        source={require("./../image/CardProduct.png")}
        style={styles.image}
      />
      <View style={styles.card}>
        <TextAndReview />
        <ColorAndSize />
        <DescriptionComponent description={description} />
        <ReviewComponent description={"Review"} />
      </View>
      <CartButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#ffff",
  },
  image: {
    width: 415,
    height: 520,
  },
  card: {
    flex: 6,
    paddingHorizontal: 30,
    paddingVertical: 20,
    marginTop: -40,
    borderRadius: 30,
    backgroundColor: "#fff",
  },
});

export default CardProduct;
