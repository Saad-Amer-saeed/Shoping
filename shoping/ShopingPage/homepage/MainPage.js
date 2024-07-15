import React, { useState } from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";
import Category from "./MainPageComponent/Category";
import FeatureList from "./MainPageComponent/FeatureComponent";
import FeatureText from "./MainPageComponent/FeatureText";
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
      image: require("./../../image/Feature1.png"),
      title: "Turtleneck Sweater",
      price: "$39.99",
    },
    {
      image: require("./../../image/Feature2.png"),
      title: "Turtleneck Sweater",
      price: "$76.99",
    },
    {
      image: require("./../../image/Feature3.png"),
      title: "Turtleneck Sweater",
      price: "$39.99",
    },
  ];

  return (
    <ScrollView style={styles.outercontainer1}>
      <View style={styles.outercontainer2}>
        <View style={styles.MainContainer}>
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
          style={styles.Image}
        />
        <FeatureText />
        <FeatureList features={features} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
  },
  outercontainer1: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  outercontainer2: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "#fff",
  },
  Image: {
    width: 350,
    height: 200,
    resizeMode: "contain",
    marginTop: 10,
    marginBottom: 15,
  },
});

export default CategoryList;
