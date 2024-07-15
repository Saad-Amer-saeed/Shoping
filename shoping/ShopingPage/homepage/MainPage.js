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
    { name: "woman-sharp", label: "Women" },
    { name: "man", label: "Men" },
    { name: "glasses", label: "Accessories" },
    { name: "brush-outline", label: "Bauty" },
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
              label={category.label}
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
      {/* <Image source={require("./../../image/ww.png")} style={styles.cover2} /> */}
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
    paddingHorizontal: 10,
  },
  outercontainer2: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "#fff",
  },
  cover: {
    width: 350,
    height: 200,
    resizeMode: "contain",
    marginTop: 10,
    marginBottom: 15,
    // backgroundColor: "red",
  },
  cover2: {
    flex: 1,
    backgroundColor: "red",
    width: 450,
    height: 200,
    resizeMode: "center",
    marginTop: 20,
    marginBottom: 15,
    // backgroundColor: "red",
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
    marginBottom: 30,
  },
});

export default CategoryList;
