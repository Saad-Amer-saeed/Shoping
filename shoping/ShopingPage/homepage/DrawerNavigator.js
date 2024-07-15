import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ShopingHomePage from "./MainPage";
import TabNavigator from "./TabNavigation";
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <View style={styles.drawerContainer}>
      <Drawer.Navigator>
        <Drawer.Screen
          name="GemStore"
          component={TabNavigator}
          options={({ navigation }) => ({
            title: "Gemstore",
            headerShadowVisible: false,
            headerTitleStyle: {
              fontSize: 20, // Change the font size here
            },
            headerLeft: () => (
              <View style={{ paddingHorizontal: 30 }}>
                <TouchableOpacity
                  onPress={() => navigation.toggleDrawer()}
                  style={styles.headerButton}
                >
                  <Ionicons name="menu-outline" size={30} color="black" />
                </TouchableOpacity>
              </View>
            ),
            headerRight: () => (
              <View style={{ paddingHorizontal: 30 }}>
                <TouchableOpacity style={styles.headerButton}>
                  <Ionicons
                    name="notifications-outline"
                    size={27}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
            ),
          })}
        />
      </Drawer.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    // paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: "#ffff",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffff",
  },
});

export default DrawerNavigator;
