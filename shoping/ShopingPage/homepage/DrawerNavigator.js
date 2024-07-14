// import React from "react";
// import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
// import Ionicons from "@expo/vector-icons/Ionicons";

// import { createDrawerNavigator } from "@react-navigation/drawer";
// import ShopingHomePage from "./HomePage";
// const Drawer = createDrawerNavigator();

// const DrawerNavigator = () => {
//   return (
//     <View style={styles.drawerContainer}>
//       <Drawer.Navigator>
//         <Drawer.Screen
//           name="GemStore"
//           component={ShopingHomePage}
//           options={({ navigation }) => ({
//             title: "المجمعات الطبية",
//             headerShadowVisible: false,

//             headerRight: () => (
//               <TouchableOpacity
//               // onPress={() => navigation.goBack()}
//               // style={styles.headerButton}
//               >
//                 <Ionicons
//                   name="notifications-outline"
//                   size={24}
//                   color="black"
//                 />
//               </TouchableOpacity>
//             ),
//           })}
//         />
//       </Drawer.Navigator>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#ffff",
//   },
//   text: {
//     fontSize: 20,
//     textAlign: "center",
//     margin: 10,
//   },
//   iconContainer: {
//     padding: 30, // Added padding
//   },
// });

// export default DrawerNavigator;

import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ShopingHomePage from "./HomePage";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <View style={styles.drawerContainer}>
      <Drawer.Navigator>
        <Drawer.Screen
          name="GemStore"
          component={ShopingHomePage}
          options={({ navigation }) => ({
            title: "Gemstore",
            headerShadowVisible: false,
            headerRight: () => (
              <TouchableOpacity style={styles.headerButton}>
                <Ionicons
                  name="notifications-outline"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
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
    paddingHorizontal: 30,
    paddingVertical: 20,
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
