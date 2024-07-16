import React from "react";
import { Text, View, StyleSheet } from "react-native";

const ColorAndSize = () => {
  const colorCircles = ["#E7C0A7", "#050302", "#EE6969"];
  const sizeCircles = ["S", "M", "L"];

  return (
    <View style={styles.colorAndSize}>
      <View style={styles.text}>
        <Text style={styles.colorText}>Color</Text>
        <Text style={styles.sizeText}>Size</Text>
      </View>
      <View style={styles.circle}>
        <View style={styles.circleMainStyle}>
          {colorCircles.map((color, index) => (
            <View
              key={index}
              style={[styles.colorCircle, { backgroundColor: color }]}
            />
          ))}
        </View>
        <View style={styles.circleMainStyle}>
          {sizeCircles.map((size, index) => (
            <View key={index} style={styles.colorCircle2}>
              <Text style={styles.sizeText2}>{size}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  colorAndSize: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#F3F3F6",
    marginTop: 30,
    paddingTop: 15,
    flex: 1,
    marginBottom: 165, // Remove if unnecessary
  },
  text: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  colorText: {
    fontSize: 19,
  },
  sizeText: {
    flex: 1,
    fontSize: 19,
    paddingLeft: 165,
  },
  circle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  circleMainStyle: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingTop: 10,
  },
  colorCircle: {
    width: 33,
    height: 33,
    borderRadius: 18,
    marginHorizontal: 5,
  },
  colorCircle2: {
    width: 40,
    height: 40,
    borderRadius: 22,
    backgroundColor: "#FAFAFA",
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  sizeText2: {
    fontSize: 20,
  },
});

export default ColorAndSize;
