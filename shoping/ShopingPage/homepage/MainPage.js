import React from "react";
import { Text, View, StyleSheet } from "react-native";

const ShopingHomePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffff",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});

export default ShopingHomePage;
