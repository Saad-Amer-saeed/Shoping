import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Category = () => {
  return (
    <View style={styles.container}>
      <View style={styles.test}>
        <View style={styles.iconContainer}>
          <View style={styles.outerCircle}>
            <Ionicons name="woman-sharp" size={30} color="#ffff" />
          </View>
        </View>
        {/* <View style={styles.iconContainer}>
          <View style={styles.outerCircle}>
            <Ionicons name="man" size={30} color="#ffff" />
          </View>
        </View>
        <View style={styles.iconContainer}>
          <View style={styles.outerCircle}>
            <MaterialCommunityIcons name="glasses" size={30} color="#ffff" />
          </View>
        </View>
        <View style={styles.iconContainer}>
          <View style={styles.outerCircle}>
            <Ionicons name="brush-outline" size={30} color="#ffff" />
          </View>
        </View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  test: {
    paddingTop: 25,
    paddingHorizontal: 20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconContainer: {
    width: 55,
    height: 55,
    borderRadius: 40,
    backgroundColor: "#3A2C27",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
  },
  outerCircle: {
    width: 65,
    height: 65,
    borderRadius: 37.5,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
  },
});

export default Category;
