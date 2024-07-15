import React from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";

const FeatureList = ({ features }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.Feature}
    >
      {features.map((feature, index) => (
        <View key={index} style={styles.MainContainer}>
          <Image source={feature.image} style={styles.Image} />
          <View style={styles.text}>
            <Text style={styles.title}>{feature.title}</Text>
            <Text style={styles.price}>{feature.price}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Feature: {
    flexDirection: "row",
  },
  MainContainer: {
    paddingLeft: 0,
    alignItems: "center",
    marginHorizontal: 6,
  },
  Image: {
    width: 150,
    height: 220,
    resizeMode: "contain",
    borderRadius: 15,
  },
  price: {
    fontSize: 20,
  },
  title: {
    fontSize: 15,
  },
  text: {
    paddingTop: 10,
    alignItems: "center",
  },
});

export default FeatureList;
