import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const ColorAndSize = () => {
  const colorCircles = ["#E7C0A7", "#050302", "#EE6969"];
  const sizeCircles = ["L", "M", "S"];
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <View style={styles.colorAndSize}>
      <View style={styles.text}>
        <Text style={styles.colorText}>Color</Text>
        <Text style={styles.sizeText}>Size</Text>
      </View>
      <View style={styles.circle}>
        <View style={styles.circleMainStyle}>
          {colorCircles.map((color, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedColor(color)}
              style={[
                styles.outerCircle,
                selectedColor === color && styles.selectedOuterCircle,
              ]}
            >
              <View style={[styles.colorCircle, { backgroundColor: color }]} />
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.circleMainStyle}>
          {sizeCircles.map((size, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedSize(size)}
              style={[
                styles.colorCircle2,
                selectedSize === size && styles.selectedSizeCircle,
              ]}
            >
              <Text
                style={[
                  styles.sizeText2,
                  selectedSize === size && styles.selectedSizeText,
                ]}
              >
                {size}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  colorAndSize: {
    borderTopWidth: 1,
    // borderBottomWidth: 1,
    borderColor: "#F3F3F6",
    marginTop: 30,
    paddingTop: 15,
    flex: 1,
    // marginBottom: 12,

    // backgroundColor: "green",
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
  outerCircle: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  selectedOuterCircle: {
    width: 41,
    height: 41,
    borderRadius: 20.5,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  colorCircle: {
    width: 33,
    height: 33,
    borderRadius: 16.5,
  },
  colorCircle2: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FAFAFA",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  selectedSizeCircle: {
    backgroundColor: "#515151",
  },
  sizeText2: {
    fontSize: 20,
  },
  selectedSizeText: {
    color: "#FFFFFF",
  },
});

export default ColorAndSize;
