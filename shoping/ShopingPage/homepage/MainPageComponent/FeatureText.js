import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FeatureText = () => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.FeatureText}>Feature Products</Text>
      <Text style={styles.showingText}>Show All</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  FeatureText: {
    fontSize: 20,
  },
  showingText: {
    fontSize: 18,
    color: "#9B9B9B",
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 30,
  },
});

export default FeatureText;
