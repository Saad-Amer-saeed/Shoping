import React from "react";
import { StyleSheet, Text, View, Image, StatusBar } from "react-native";
import AppButton from "./App-Button";
import Colors from "../Constant/colors.android.ios";

const DynamicIntroPage = ({
  title,
  subtitle,
  imageSource,
  activeDotIndex,
  handelmainpage,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text2}>{subtitle}</Text>
      <View style={styles.overlay} />
      <Image source={imageSource} style={styles.Image} />
      <View style={styles.dotsContainer}>
        <View style={[styles.dot, activeDotIndex === 0 && styles.activeDot]} />
        <View style={[styles.dot, activeDotIndex === 1 && styles.activeDot]} />
        <View style={[styles.dot, activeDotIndex === 2 && styles.activeDot]} />
      </View>
      <View style={styles.AppButton}>
        <AppButton
          title="Shopping now"
          fontSize={21}
          paddingVertical={20}
          paddingHorizontal={60}
          color={Colors.primary1100}
          borderRadius={50}
          textColor={Colors.primary_white}
          onPress={handelmainpage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "50%",
    backgroundColor: Colors.primary_4,
  },
  Image: {
    width: 262,
    height: 368,
    resizeMode: "contain",
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.primary_4,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: Colors.primary_white,
  },
  activeDot: {
    backgroundColor: Colors.primary_white, // Change to your active dot color
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    paddingBottom: 40,
  },
  text2: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 80,
  },
  AppButton: {
    marginTop: 30,
  },
});

export default DynamicIntroPage;
