import React from "react";
import { StyleSheet, Text, View, Image, StatusBar } from "react-native";
import AppButton from "../Component/UiComponent/App-Button";
import Colors from "../Component/Constant/colors.android.ios";
export default function WelcomePage({ navigation }) {
  function handelIntroPage() {
    navigation.navigate("IntroPage");
  }

  return (
    <View style={styles.container}>
      <Image source={require("./../image/Welcome.png")} style={styles.cover} />

      <View style={styles.overlay}>
        <Text style={styles.text}>Welcome to Fluxstore!</Text>
        <Text style={styles.text2}>The home far a fashionista</Text>
        <AppButton
          title="Get started"
          fontSize={21}
          paddingVertical={25}
          paddingHorizontal={70}
          fontWeight="bold"
          color={Colors.primary1100}
          borderRadius={50}
          textColor={Colors.primary_white}
          onPress={handelIntroPage}
        />
      </View>
      <StatusBar barStyle="dark-content" backgroundColor="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  cover: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.balckOpciticy,
    paddingTop: 500,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    paddingBottom: 40,
  },
  text2: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    paddingBottom: 40,
  },
});
