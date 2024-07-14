import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
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
});

export default CategoryList;
