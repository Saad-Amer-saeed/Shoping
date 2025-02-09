import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Category = ({ name, isPressed, onPress, label }) => {
  return (
    <View style={styles.container}>
      <View style={styles.InerContainer}>
        <TouchableOpacity
          style={[
            styles.iconContainer,
            isPressed && styles.iconContainerPressed,
          ]}
          onPress={onPress}
        >
          {isPressed ? (
            <View style={styles.outerCircle}>
              <Ionicons name={name} size={30} color="#ffff" />
            </View>
          ) : (
            <Ionicons name={name} size={30} color="#9D9D9D" />
          )}
        </TouchableOpacity>
        <Text style={styles.label}>{label}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  InerContainer: {
    flex: 1,
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconContainer: {
    width: 55,
    height: 55,
    borderRadius: 40,
    backgroundColor: "#F3F3F3",
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainerPressed: {
    backgroundColor: "#3A2C27",
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
  label: {
    marginTop: 10,
    fontSize: 16,
    color: "#000",
  },
});

export default Category;
