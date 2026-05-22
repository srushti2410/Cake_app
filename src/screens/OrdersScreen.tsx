import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

const orders = [
  {
    id: 1,
    name: "Chocolate Cheesecake",
    image:
      "https://img.freepik.com/free-photo/decadent-chocolate-cake-with-dripping-ganache_84443-82411.jpg",
    price: "₹249",
   
  },
  {
    id: 2,
    name: "Dark Chocolate Lava Cake",
    image:
      "https://img.freepik.com/premium-photo/front-view-delicious-chocolate-cake_974629-125275.jpg",
    price: "₹399",
  
  },
  {
    id: 3,
    name: "Chocolate Truffle Cake",
    image:
      "https://img.freepik.com/premium-photo/choclate-cake_1295979-2940.jpg",
    price: "₹299",
  
  },
];

export default function OrdersScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#0F0A09" }}>

      {/* TITLE */}
      


      {/* ORDERS */}
      <View style={{ paddingHorizontal: 20 }}>
        {orders.map((item) => (
          <View
            key={item.id}
            style={{
              marginTop:40,
              backgroundColor: "#1C1210",
              borderRadius: 20,
              marginBottom: 22,
              overflow: "hidden",
              borderWidth: 1,
              
              borderColor: "#5A2E24",
            }}
          >
            <Image
              source={{ uri: item.image }}
              style={{ width: "100%", height: 170 }}
            />

            <View style={{ padding: 18 }}>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 20,
                  fontWeight: "bold",
                  fontFamily: "times new roman",  
                }}
              >
                 {item.name}
              </Text>

              {/* PRICE + STATUS */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 12,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#D7B49E",
                    fontSize: 16,
                    fontWeight: "bold",
                    fontFamily: "times new roman",
                  }}
                >
                  {item.price}
                </Text>

                
                  
               
              </View>

              {/* BUTTON */}
              <TouchableOpacity
                style={{
                  backgroundColor: "#3A1F1F",
                  padding: 14,
                  borderRadius: 15,
                  marginTop: 15,
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
                  Reorder 
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}