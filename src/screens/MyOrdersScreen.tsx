// import { View, Text, ScrollView, Image } from "react-native";

// const orders = [
//   {
//     id: 1,
//     name: "Chocolate Lava Cake",
//     price: "₹249",
//     status: "Delivered",
//     image:
//       "https://img.freepik.com/free-photo/decadent-chocolate-cake-with-dripping-ganache_84443-82411.jpg",
//   },
//   {
//     id: 2,
//     name: "Dark Choco Brownie",
//     price: "₹299",
//     status: "On The Way",
//     image:
//       "https://img.freepik.com/premium-photo/little-cut-out-chocolate-cake_961875-394296.jpg",
//   },
//   {
//     id: 3,
//     name: "Chocolate Truffle Cake",
//     price: "₹199",
//     status: "Delivered",
//     image:
//       "https://img.freepik.com/premium-photo/chocolate-cake-with-chocolate-sauce-chocolate-sauce-sprinkles_832479-4402.jpg",
//   },
// ];

// export default function MyOrdersScreen() {
//   return (
//     <ScrollView style={{ flex: 1, backgroundColor: "#0F0A09" }}>

//       {/* TITLE */}
//       <Text
//         style={{
//           fontSize: 30,
//           fontWeight: "bold",
//           color: "#D7B49E",
//           marginTop: 60,
//           marginLeft: 20,
//           marginBottom: 20,
//         }}
//       >
//          My Chocolate Orders
//       </Text>

//       {/* ORDERS */}
//       <View style={{ paddingHorizontal: 20 }}>
//         {orders.map((item) => (
//           <View
//             key={item.id}
//             style={{
//               backgroundColor: "#1C1210",
//               borderRadius: 20,
//               marginBottom: 20,
//               overflow: "hidden",
//               borderWidth: 1,
//               borderColor: "#5A2E24",
//             }}
//           >
//             <Image
//               source={{ uri: item.image }}
//               style={{ width: "100%", height: 180 }}
//             />

//             <View style={{ padding: 15 }}>
//               <Text
//                 style={{
//                   color: "#fff",
//                   fontSize: 20,
//                   fontWeight: "bold",
//                 }}
//               >
//                  {item.name}
//               </Text>

//               <Text
//                 style={{
//                   color: "#D7B49E",
//                   marginTop: 8,
//                   fontSize: 16,
//                   fontWeight: "bold",
//                 }}
//               >
//                 {item.price}
//               </Text>

//               {/* STATUS */}
//               <View
//                 style={{
//                   marginTop: 10,
//                   alignSelf: "flex-start",
//                   paddingHorizontal: 12,
//                   paddingVertical: 6,
//                   borderRadius: 12,
//                   backgroundColor:
//                     item.status === "Delivered"
//                       ? "#2E7D32"
//                       : "#5A2E24",
//                 }}
//               >
//                 <Text style={{ color: "#fff", fontWeight: "bold" }}>
//                   {item.status}
//                 </Text>
//               </View>
//             </View>
//           </View>
//         ))}
//       </View>
//     </ScrollView>
//   );
// }