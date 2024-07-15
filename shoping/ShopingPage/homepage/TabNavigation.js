// import React from "react";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// import ShopingHomePage from "./MainPage";
// // Import other screens

// const Tab = createMaterialBottomTabNavigator();

// function TabNavigator() {
//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       activeColor="black"
//       inactiveColor="#BEBFC4"
//       barStyle={{
//         backgroundColor: "#fff",
//         borderTopWidth: 2,
//         borderColor: "#BEBFC4",
//         borderTopLeftRadius: 10,
//         borderTopRightRadius: 10,
//         overflow: "hidden",
//       }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={ShopingHomePage}
//         options={{
//           tabBarIcon: ({ color }) => (
//             <Icon name="home" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Settings"
//         component={ShopingHomePage}
//         options={{
//           tabBarIcon: ({ color }) => (
//             <Icon name="cog" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={ShopingHomePage}
//         options={{
//           tabBarIcon: ({ color }) => (
//             <Icon name="account" color={color} size={26} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

// export default TabNavigator;
// import React from "react";
// import { View, StyleSheet } from "react-native";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// import ShopingHomePage from "./MainPage";

// const Tab = createMaterialBottomTabNavigator();

// function TabNavigator() {
//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       activeColor="black"
//       inactiveColor="#BEBFC4"
//       barStyle={styles.tabBar}
//     >
//       <Tab.Screen
//         name="Home"
//         component={ShopingHomePage}
//         options={{
//           tabBarIcon: ({ color }) => (
//             <Icon name="home" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Settings"
//         component={ShopingHomePage}
//         options={{
//           tabBarIcon: ({ color }) => (
//             <Icon name="cog" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={ShopingHomePage}
//         options={{
//           tabBarIcon: ({ color }) => (
//             <Icon name="account" color={color} size={26} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   tabBar: {
//     // marginBottom: -40,
//     // // margintop: 40,
//     // backgroundColor: "#ffff",

//     // borderWidth: 2,
//     // borderColor: "#BEBFC4",
//     // borderTopLeftRadius: 40,
//     // borderTopRightRadius: 40,
//     // overflow: "hidden",

//     marginBottom: -40,
//     backgroundColor: "#ffff",
//     borderWidth: 1,
//     borderColor: "#BEBFC4", // Change to transparent to remove the visible border
//     borderTopLeftRadius: 10,
//     borderTopRightRadius: 10,
//     overflow: "hidden",
//   },
// });

// export default TabNavigator;
import React from "react";
import { View, StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import ShopingHomePage from "./MainPage";
import { useTheme } from "react-native-paper";

const Tab = createMaterialBottomTabNavigator();

function TabNavigator() {
  const theme = useTheme();
  theme.colors.secondaryContainer = "transparent"; // Fixed typo

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="black"
      inactiveColor="#BEBFC4"
      barStyle={styles.tabBar}
    >
      <Tab.Screen
        name="Home"
        component={ShopingHomePage}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={ShopingHomePage}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="cog" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ShopingHomePage}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    marginBottom: -40,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#BEBFC4",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
});

export default TabNavigator;
