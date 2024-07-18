import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Animated } from "react-native";
import DynamicIntroPage from "../Component/UiComponent/DynamicIntroPage";

const IntrPage = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeInAnim] = useState(new Animated.Value(0));
  function handelmainpage() {
    navigation.navigate("DrawerNavigator");
  }
  const pages = [
    {
      title: "Discover something new",
      subtitle: "Special new arrivals for you",
      imageSource: require("./../image/Entro1.png"),
      activeDotIndex: 0,
    },
    {
      title: "Discover something else",
      subtitle: "More specials just for you",
      imageSource: require("./../image/Entro2.png"),
      activeDotIndex: 1,
    },
    {
      title: "Discover another thing",
      subtitle: "Exciting new offers",
      imageSource: require("./../image/Entro3.png"),
      activeDotIndex: 2,
    },
  ];

  useEffect(() => {
    const fadeIn = () => {
      Animated.timing(fadeInAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start(({ finished }) => {
        if (finished) {
          setTimeout(fadeOut, 4000);
        }
      });
    };

    const fadeOut = () => {
      Animated.timing(fadeInAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(({ finished }) => {
        if (finished) {
          const nextIndex = currentIndex + 1;
          if (nextIndex < pages.length) {
            setCurrentIndex(nextIndex);
          } else {
            setCurrentIndex(0);
          }
        }
      });
    };

    fadeIn();
  }, [currentIndex]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.animatedContainer, { opacity: fadeInAnim }]}
      >
        <DynamicIntroPage
          title={pages[currentIndex].title}
          subtitle={pages[currentIndex].subtitle}
          imageSource={pages[currentIndex].imageSource}
          activeDotIndex={pages[currentIndex].activeDotIndex}
          handelmainpage={handelmainpage}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    position: "relative",
  },
  animatedContainer: {
    flex: 1,
  },
});

export default IntrPage;
