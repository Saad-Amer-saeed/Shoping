import React, { useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Category from "./Category";

const CategoryList = () => {
  const [pressedIndex, setPressedIndex] = useState(null);

  const handlePress = (index) => {
    setPressedIndex(index === pressedIndex ? null : index);
  };

  const categories = [
    { name: "woman-sharp" },
    { name: "man" },
    { name: "glasses" },
    { name: "brush-outline" },
  ];

  return (
    <>
      <View style={styles.container}>
        {categories.map((category, index) => (
          <Category
            key={index}
            name={category.name}
            isPressed={pressedIndex === index}
            onPress={() => handlePress(index)}
          />
        ))}
        <Image
          source={require("./../../image/MainPage.png")}
          style={styles.cover}
        />
      </View>
      <View style={styles.text}>
        <Text style={styles.FeatureText}>Feature Products</Text>
        <Text style={styles.showingText}>Show All</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundColor: "#fff",
  },
  cover: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",

    resizeMode: "contain",
    top: 0,
    left: 0,
    zIndex: -1,
  },
  FeatureText: {
    fontSize: 25,
  },
  showingText: {
    fontSize: 18,
    color: "#9B9B9B",
  },
  text: {
    flex: 1,
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    backgroundColor: "#ffff",
  },
});

export default CategoryList;
