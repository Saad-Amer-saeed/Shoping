// import React from "react";
// import { Text, View, StyleSheet, Image } from "react-native";
// import TextAndReview from "./ProductComponent/TextAndReview ";

// const CardProduct = () => {
//   return (
//     <View style={styles.container}>
//       <Image source={require("./../image/r99.png")} style={styles.Image} />
//       <View style={styles.Card}>
//         <TextAndReview />
//         <View style={styles.ColorAndSize}>
//           <View>
//             <Text style={styles.ColorText}>Color</Text>
//             <View style={styles.CircleMainStyle}>
//               <View style={styles.colorCircle} />
//               <View style={styles.colorCircle} />
//               <View style={styles.colorCircle} />
//             </View>
//           </View>
//           <View>
//             <Text style={styles.SizeText}>Size</Text>
//             <View style={styles.colorCircle2}>
//               <Text style={styles.SizeText2}>M</Text>
//             </View>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   ColorText: {
//     fontSize: 23,
//   },
//   SizeText: {
//     fontSize: 23,
//   },
//   container: {
//     flex: 1,
//     justifyContent: "flex-start",
//     backgroundColor: "#E1E6E2",
//   },
//   Image: {
//     width: 415,
//     height: 520,
//   },
//   Card: {
//     flex: 1,
//     paddingHorizontal: 30,
//     paddingVertical: 20,
//     marginTop: -30,
//     borderRadius: 30,
//     backgroundColor: "#ffff",
//   },
//   colorCircle: {
//     width: 33,
//     height: 33,
//     borderRadius: 18,
//     backgroundColor: "blue",
//     marginLeft: 10,
//   },
//   colorCircle2: {
//     width: 40,
//     height: 40,
//     borderRadius: 22,
//     backgroundColor: "gray",
//     marginLeft: 10,
//   },
//   ColorAndSize: {
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   CircleMainStyle: {
//     flexDirection: "row",
//   },
// });

// export default CardProduct;

// import React from "react";
// import { Text, View, StyleSheet, Image } from "react-native";
// import TextAndReview from "./ProductComponent/TextAndReview ";

// const CardProduct = () => {
//   return (
//     <View style={styles.container}>
//       <Image source={require("./../image/r99.png")} style={styles.Image} />
//       <View style={styles.Card}>
//         <TextAndReview />
//         <View style={styles.ColorAndSize}>
//           <View style={styles.test}>
//             <Text style={styles.ColorText}>Color</Text>
//             <View style={styles.CircleMainStyle}>
//               <View style={styles.colorCircle} />
//               <View style={styles.colorCircle} />
//               <View style={styles.colorCircle} />
//             </View>
//           </View>
//           <View>
//             <Text style={styles.SizeText}>Size</Text>
//             <View style={styles.CircleMainStyle}>
//               <View style={styles.colorCircle2}>
//                 <Text style={styles.SizeText2}>M</Text>
//               </View>
//               <View style={styles.colorCircle2}>
//                 <Text style={styles.SizeText2}>M</Text>
//               </View>
//               <View style={styles.colorCircle2}>
//                 <Text style={styles.SizeText2}>M</Text>
//               </View>
//             </View>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   test: {},
//   ColorText: {
//     fontSize: 23,
//   },
//   SizeText: {
//     fontSize: 23,
//   },
//   container: {
//     flex: 1,
//     justifyContent: "flex-start",
//     backgroundColor: "#E1E6E2",
//   },
//   Image: {
//     width: 415,
//     height: 520,
//   },
//   Card: {
//     flex: 1,
//     paddingHorizontal: 30,
//     paddingVertical: 20,
//     marginTop: -30,
//     borderRadius: 30,
//     backgroundColor: "#ffff",
//   },
//   colorCircle: {
//     width: 33,
//     height: 33,
//     borderRadius: 18,
//     backgroundColor: "blue",
//   },
//   colorCircle2: {
//     width: 40,
//     height: 40,
//     borderRadius: 22,
//     backgroundColor: "#C5C5C5",
//     marginLeft: 10,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   SizeText2: {
//     fontSize: 20,
//   },
//   ColorAndSize: {
//     paddingTop: 30,
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   CircleMainStyle: {
//     flexDirection: "row",
//     justifyContent: "space-between",

//     backgroundColor: "green",
//     paddingTop: 10,
//   },
// });

// export default CardProduct;

import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import TextAndReview from "./ProductComponent/TextAndReview ";

const CardProduct = () => {
  return (
    <View style={styles.container}>
      <Image source={require("./../image/r99.png")} style={styles.image} />
      <View style={styles.card}>
        <TextAndReview />
        <View style={styles.colorAndSize}>
          <View style={styles.text}>
            <Text style={styles.colorText}>Color</Text>
            <Text style={styles.sizeText}>Size</Text>
          </View>
          <View style={styles.circle}>
            <View style={styles.circleMainStyle}>
              <View style={styles.colorCircle} />
              <View style={styles.colorCircle} />
              <View style={styles.colorCircle} />
            </View>
            <View style={styles.circleMainStyle}>
              <View style={styles.colorCircle2}>
                <Text style={styles.sizeText2}>M</Text>
              </View>
              <View style={styles.colorCircle2}>
                <Text style={styles.sizeText2}>M</Text>
              </View>
              <View style={styles.colorCircle2}>
                <Text style={styles.sizeText2}>M</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#E1E6E2",
  },
  image: {
    width: 415,
    height: 520,
  },
  card: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 20,
    marginTop: -30,
    borderRadius: 30,
    backgroundColor: "#fff",
  },
  colorAndSize: {
    paddingTop: 30,
    flex: 1,
  },
  text: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  colorText: {
    fontSize: 19,
  },
  sizeText: {
    flex: 1,
    fontSize: 19,

    paddingLeft: 170,
  },
  circle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  circleMainStyle: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingTop: 10,
  },
  colorCircle: {
    width: 33,
    height: 33,
    borderRadius: 18,
    backgroundColor: "blue",
    marginHorizontal: 5,
  },
  colorCircle2: {
    width: 40,
    height: 40,
    borderRadius: 22,
    backgroundColor: "#C5C5C5",
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  sizeText2: {
    fontSize: 20,
  },
});

export default CardProduct;
