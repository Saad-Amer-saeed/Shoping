import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Category from "./Category";
const ShopingHomePage = () => {
  return (
    <View style={styles.test}>
      <Category></Category>
      <Category></Category>
      <Category></Category>
      <Category></Category>
    </View>
    // <View style={styles.container}>
    //   <View style={styles.test}>
    //     <View style={styles.iconContainer}>
    //       <Ionicons name="glasses" size={30} color="black" />
    //     </View>
    //     <View style={styles.iconContainer}>
    //       <Ionicons name="notifications-outline" size={30} color="black" />
    //     </View>
    //     <View style={styles.iconContainer}>
    //       <Ionicons name="notifications-outline" size={30} color="black" />
    //     </View>
    //     <View style={styles.iconContainer}>
    //       <Ionicons name="notifications-outline" size={30} color="black" />
    //     </View>
    //   </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  test: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconContainer: {
    width: 65,
    height: 65,
    borderRadius: 40,
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});

export default ShopingHomePage;

// import React from "react";
// import { Text, View, StyleSheet } from "react-native";
// import { Ionicons } from "@expo/vector-icons";

// const ShopingHomePage = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.test}>
//         <View style={styles.iconContainer}>
//           <Ionicons name="notifications-outline" size={30} color="black" />
//         </View>
//         <View style={styles.iconContainer}>
//           <Ionicons name="notifications-outline" size={30} color="black" />
//         </View>
//         <View style={styles.iconContainer}>
//           <Ionicons name="notifications-outline" size={30} color="black" />
//         </View>
//         <View style={styles.iconContainer}>
//           <Ionicons name="notifications-outline" size={30} color="black" />
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#ffff",
//   },
//   test: {
//     paddingTop: 25,
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   iconContainer: {
//     width: 80,
//     height: 80,
//     borderRadius: 50,
//     backgroundColor: "#e0e0e0",
//     justifyContent: "center",
//     alignItems: "center",
//     borderWidth: 3, // Add this line for a thick border
//     borderColor: "#000", // Add this line to specify the border color
//   },
//   text: {
//     fontSize: 20,
//     textAlign: "center",
//     margin: 10,
//   },
// });

// export default ShopingHomePage;

// import React from "react";
// import { Text, View, StyleSheet } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

// const ShopingHomePage = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.test}>
//         <View style={styles.iconContainer}>
//           <View style={styles.outerCircle}>
//             <Ionicons name="woman-sharp" size={30} color="#ffff" />
//           </View>
//         </View>
//         <View style={styles.iconContainer}>
//           <View style={styles.outerCircle}>
//             <Ionicons name="man" size={30} color="#ffff" />
//           </View>
//         </View>
//         <View style={styles.iconContainer}>
//           <View style={styles.outerCircle}>
//             <MaterialCommunityIcons name="glasses" size={30} color="#ffff" />
//           </View>
//         </View>
//         <View style={styles.iconContainer}>
//           <View style={styles.outerCircle}>
//             <Ionicons name="brush-outline" size={30} color="#ffff" />
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#ffff",
//   },
//   test: {
//     paddingTop: 25,
//     paddingHorizontal: 20,
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   iconContainer: {
//     width: 55,
//     height: 55,
//     borderRadius: 40,
//     backgroundColor: "#3A2C27",
//     justifyContent: "center",
//     alignItems: "center",
//     borderWidth: 1,
//     borderColor: "#000",
//   },
//   outerCircle: {
//     width: 65,
//     height: 65,
//     borderRadius: 37.5,
//     backgroundColor: "transparent",
//     justifyContent: "center",
//     alignItems: "center",
//     borderWidth: 1,
//     borderColor: "black",
//   },
// });

// export default ShopingHomePage;
