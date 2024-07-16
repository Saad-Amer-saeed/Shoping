import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

const TextAndReview = () => {
  return (
    <View style={styles.textContainer}>
      <View style={styles.TextAndReview}>
        <Text style={styles.producttype}>SportWear Set</Text>
        <View style={styles.ReviewStar}>
          <FontAwesome6 name="star" size={24} color="black" />
          <FontAwesome6 name="star" size={24} color="black" />
          <FontAwesome6 name="star" size={24} color="black" />
          <FontAwesome6 name="star" size={24} color="black" />
          <FontAwesome6 name="star" size={24} color="black" />
        </View>
      </View>
      <Text style={styles.Price}>$ 80.00</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  producttype: {
    fontSize: 23,
  },
  Price: {
    fontSize: 25,
    fontWeight: "bold",
  },
  ReviewStar: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  TextAndReview: {
    flex: 1,
    marginRight: 90,
  },
});

export default TextAndReview;
