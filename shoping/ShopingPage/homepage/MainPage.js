import React, { useState } from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";
import Category from "./Category";
import FeatureList from "./FeatureComponent";

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

  const features = [
    {
      image: require("./../../image/uu.png"),
      title: "Turtleneck Sweater",
      price: "$39.99",
    },
    {
      image: require("./../../image/pppp.png"),
      title: "Turtleneck Sweater",
      price: "$39.99",
    },
    {
      image: require("./../../image/oo.png"),
      title: "Turtleneck Sweater",
      price: "$39.99",
    },
  ];

  return (
    <ScrollView style={styles.outercontainer}>
      <View style={styles.outercontainer2}>
        <View style={styles.container}>
          {categories.map((category, index) => (
            <Category
              key={index}
              name={category.name}
              isPressed={pressedIndex === index}
              onPress={() => handlePress(index)}
            />
          ))}
        </View>
        <Image
          source={require("./../../image/MainPage.png")}
          style={styles.cover}
        />
        <View style={styles.text}>
          <Text style={styles.FeatureText}>Feature Products</Text>
          <Text style={styles.showingText}>Show All</Text>
        </View>
        <FeatureList features={features} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
  },
  outercontainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 30,
  },
  outercontainer2: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "#fff",
  },
  cover: {
    width: 350,
    height: 250,
    resizeMode: "contain",
    marginTop: 15,
  },
  FeatureText: {
    fontSize: 20,
  },
  showingText: {
    fontSize: 18,
    color: "#9B9B9B",
  },
  text: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 0,
    marginBottom: 15,
  },
});

export default CategoryList;
