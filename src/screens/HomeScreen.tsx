import {
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

const restaurants = [
  {
    id: 1,
    name: "Chocolate Lava Cake",
    image:
      "https://img.freepik.com/free-photo/decadent-chocolate-cake-with-dripping-ganache_84443-82411.jpg",
  },
  {
    id: 2,
    name: "Dark Choco Brownie",
    image:
      "https://img.magnific.com/free-photo/dark-chocolate-brownie-slice-with-chocolate-icing-generated-by-ai_188544-22805.jpg",
  },
  {
    id: 3,
    name: "Chocolate Truffle Cake",
    image:
      "https://img.freepik.com/premium-photo/choclate-cake_1295979-2940.jpg",
  },
];

const categories = [
  {
    id: 1,
    name: "Lava Cakes",
    image:
      "https://img.freepik.com/premium-photo/illustration-slice-dark-chocolate-cake-luxury-look-close-up_756405-67611.jpg",
  },
  {
    id: 2,
    name: "Brownies",
    image:
      "https://img.freepik.com/premium-photo/front-view-delicious-chocolate-cake_974629-125275.jpg",
  },
  {
    id: 3,
    name: "Truffle",
    image:
      "https://img.freepik.com/premium-photo/chocolate-cake-with-chocolate-sauce-chocolate-sauce-sprinkles_832479-4402.jpg",
  },
  {
    id: 4,
    name: "Cheesecake",
    image:
      "https://img.freepik.com/premium-photo/chocolate-cake-with-word-t-it_783884-278133.jpg",
  },
];

export default function HomeScreen({ navigation }: any) {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#0F0A09" }}>

      {/* HEADER */}
      <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
       

        <TextInput
          placeholder="Search chocolate cakes..."
          placeholderTextColor="#aaa"
          style={{
            backgroundColor: "#1C1210",
            borderRadius: 15,
            paddingHorizontal: 18,
            height: 55,
            color: "white",
            fontSize: 16,
            marginTop: 15,
            borderWidth: 1,
            borderColor: "#5A2E24",
             fontFamily  :"times new roman",
          }}
        />
      </View>

      {/* OFFER BANNER */}
      <View
        style={{
          marginTop: 25,
          marginHorizontal: 20,
          borderRadius: 20,
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#5A2E24",
        }}
      >
        <Image
          source={{
            uri: "https://img.freepik.com/premium-photo/chocolate-cake-slice-dripping-with-rich-sauce_810420-7594.jpg",
          }}
          style={{ width: "100%", height: 200 }}
        />
      </View>

      {/* CATEGORIES */}
      <View style={{ marginTop: 30, paddingHorizontal: 20 }}>
        <Text
          style={{
            color: "#D7B49E",
            fontSize: 22,
            marginBottom: 20,
            fontWeight: "bold",
             fontFamily  :"times new roman",

          }}
        >
          Categories
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((item) => (
            <View key={item.id} style={{ marginRight: 18, alignItems: "center" }}>
              <Image
                source={{ uri: item.image }}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 15,
                  borderWidth: 1,
                  borderColor: "#5A2E24",
                }}
              />
              <Text style={{ color: "#D7B49E", marginTop: 8, fontWeight: "600" , fontFamily  :"times new roman",}}>
                {item.name}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* RESTAURANTS */}
      <View style={{ marginTop: 35, paddingHorizontal: 20, paddingBottom: 40 }}>
        <Text
          style={{
            color: "#D7B49E",
            fontSize: 22,
            marginBottom: 20,
            fontWeight: "bold",
              fontFamily  :"times new roman",
          }}
        >
          Popular Cakes
        </Text>

        {restaurants.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => navigation.navigate("RestaurantDetail")}
            style={{
              backgroundColor: "#1C1210",
              borderRadius: 20,
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
                  fontSize: 20,
                  fontWeight: "bold",
                  fontFamily: "times new roman",
                }}
              >
                 {item.name}
              </Text>

              <Text style={{ color: "#D7B49E", marginTop: 5 , fontFamily  :"times new roman",}}>
               Rich chocolate layers with creamy delight
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}