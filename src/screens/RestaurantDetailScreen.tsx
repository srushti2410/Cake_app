import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

const foods = [
  {
    id: 1,
    name: "Chocolate Lava Slice",
    price: "₹249",
    image:
      "https://static.vecteezy.com/system/resources/previews/040/574/581/non_2x/ai-generated-a-decadent-slice-of-homemade-chocolate-fudge-on-a-plate-generated-by-ai-photo.jpg",
  },
  {
    id: 2,
    name: "Dark Choco Brownie",
    price: "₹299",
    image:
      "https://img.freepik.com/premium-photo/little-cut-out-chocolate-cake_961875-394296.jpg",
  },
  {
    id: 3,
    name: "Creamy Chocolate Dessert",
    price: "₹199",
    image:
      "https://img.freepik.com/premium-photo/chocolate-cake-with-chocolate-sauce-chocolate-sauce-sprinkles_832479-4402.jpg?w=360",
  },
];

export default function RestaurantDetailScreen({ navigation }: any) {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#0F0A09" }}>
      {/* TOP IMAGE */}
      <Image
        source={{
          uri: "https://img.freepik.com/premium-photo/chocolate-cake-with-word-t-it_783884-278133.jpg",
        }}
        style={{ width: "100%", height: 300 }}
      />

      {/* DETAILS */}
      <View style={{ padding: 20 }}>
        <Text
          style={{
            color: "#D7B49E",
            fontSize: 30,
            fontWeight: "bold",
              fontFamily: "times new roman",
          }}
        >
          Cake Palace
        </Text>

        <Text
          style={{
            color: "#aaa",
            marginTop: 10,
            fontSize: 15,
              fontFamily: "times new roman",
          }}
        >
          Freshly baked premium chocolate desserts made with love
        </Text>

        {/* MENU TITLE */}
        <Text
          style={{
            color: "#D7B49E",
            fontSize: 24,
            fontWeight: "bold",
            marginTop: 30,
            marginBottom: 20,
            fontFamily: "times new roman",
          }}
        >
          Popular Cakes
        </Text>

        {/* ITEMS */}
        {foods.map((item) => (
          <View
            key={item.id}
            style={{
              backgroundColor: "#1C1210",
              borderRadius: 22,
              marginBottom: 20,
              overflow: "hidden",
              borderWidth: 1,
              borderColor: "#5A2E24",
            }}
          >
            <Image
              source={{ uri: item.image }}
              style={{ width: "100%", height: 180 }}
            />

            <View style={{ padding: 18 }}>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 18,
                  fontWeight: "bold",
                    fontFamily: "times new roman",
                }}
              >
                {item.name}
              </Text>

              <Text
                style={{
                  color: "#D7B49E",
                  marginTop: 8,
                  fontSize: 17,
                  fontWeight: "bold",
                    fontFamily: "times new roman",
                }}
              >
                {item.price}
              </Text>

              {/* ADD BUTTON */}
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Cart", {
                    restaurantName: item.name,
                    restaurantPrice: item.price,
                  })
                }
                style={{
                  backgroundColor: "#3b170f",
                  padding: 12,
                  borderRadius: 15,
                  marginTop: 12,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#D7B49E",
                    fontWeight: "bold",
                      fontFamily: "times new roman",
                  }}
                >
                  Add to Cart
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}

        {/* CART BUTTON */}
        <TouchableOpacity
          onPress={() => navigation.navigate("Cart")}
          style={{
            backgroundColor: "#210e0a",
            padding: 18,
            borderRadius: 20,
            alignItems: "center",
            marginTop: 15,
            marginBottom: 40,
            borderWidth: 1,
            borderColor: "#D7B49E",
          }}
        >
          <Text
            style={{
              color: "#D7B49E",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            View Cart
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
