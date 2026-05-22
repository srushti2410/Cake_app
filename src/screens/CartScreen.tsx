import { View, Text, TouchableOpacity, Image } from "react-native";

export default function CartScreen({ route, navigation }: any) {
  const restaurantName =
    route?.params?.restaurantName || "Chocolate Cake";

  const restaurantPrice =
    route?.params?.restaurantPrice || "₹0";

  const image =
    route?.params?.image ||
    "https://img.freepik.com/premium-photo/front-view-delicious-chocolate-cake_974629-125275.jpg";

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#0F0A09",
      }}
    >
      {/* IMAGE TOP */}
      <Image
        source={{ uri: image }}
        style={{
          width: "100%",
          height: 250,
        }}
      />

      <View
        style={{
          flex: 1,
          padding: 20,
          justifyContent: "center",
        }}
      >
        {/* TITLE */}
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            marginBottom: 25,
            color: "#D7B49E",
          }}
        >
           Your Chocolate Cart
        </Text>

        {/* CARD */}
        <View
          style={{
            backgroundColor: "#1C1210",
            padding: 22,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: "#5A2E24",
          }}
        >
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              color: "#fff",
            }}
          >
             {restaurantName}
          </Text>

          <Text
            style={{
              fontSize: 18,
              color: "#D7B49E",
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Total: {restaurantPrice}
          </Text>

          <Text style={{ color: "#aaa", marginTop: 8 }}>
            Fresh baked melted chocolate dessert selected for you 
          </Text>
        </View>

        {/* BUTTON BACK */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: "#3b170f",
            padding: 18,
            borderRadius: 15,
            marginTop: 30,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#D7B49E",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
             Go Back
          </Text>
        </TouchableOpacity>

        {/* BUTTON CHECKOUT */}
        <TouchableOpacity
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: "HomeScreen" }],
            })
          }
          style={{
            backgroundColor: "#D7B49E",
            padding: 18,
            borderRadius: 15,
            marginTop: 15,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#0F0A09",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
             Checkout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}