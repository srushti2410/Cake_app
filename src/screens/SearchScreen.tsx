import { View, Text, TextInput, ScrollView, Image } from "react-native";

const foods = [
  {
    id: 1,
    name: "Chocolate Lava Cake Palace",
    type: "Cake",
    image:
      "https://img.freepik.com/premium-photo/chocolate-cake-with-blueberries_853645-98459.jpg",
  },
  {
    id: 2,
    name: "Dark Choco Brownie Bite",
    type: "Cake Slice",
    image:
      "https://static.vecteezy.com/system/resources/previews/035/513/210/large_2x/ai-generated-chocolate-cake-bite-healthy-recipe-for-chocolate-lovers-free-photo.jpg",
  },
  {
    id: 3,
    name: "Creamy Chocolate Dessert",
    type: "Dessert",
    image:
      "https://img.freepik.com/free-photo/decadent-chocolate-cake-with-dripping-ganache_84443-82411.jpg",
  },
  {
    id: 4,
    name: "Chocolate Delight Slice",
    type: "Sweet",
    image:
      "https://img.freepik.com/premium-photo/slice-chocolate-cake-with-chocolate-icing-chocolate-chips-top_671352-3425.jpg",
  },
];

export default function SearchScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#0F0A09" }}>

      {/* TITLE */}
      <View
  style={{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: "#1C1210",
  }}
>
  <Text style={{ color: "#D7B49E", fontSize: 22, fontWeight: "bold", fontFamily: "times new roman" }}>
     Search Cakes
  </Text>
</View>
      {/* SEARCH BAR */}
      <View style={{ paddingHorizontal: 20 }}>
        <TextInput
          placeholder="Search chocolate desserts..."
          placeholderTextColor="#888"
          style={{
            backgroundColor: "#1C1210",
            marginTop: 20,
            borderRadius: 18,
            paddingHorizontal: 18,
            height: 58,
            color: "white",
            fontSize: 16,
            borderWidth: 1,
            borderColor: "#5A2E24",
            fontFamily: "times new roman",
          }}
        />
      </View>

      {/* TAGS */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 20, marginLeft: 20 }}
      >
        {["Chocolate", "Brownie", "Cheesecake", "Truffle", "Lava"].map(
          (item, index) => (
            <View
              key={index}
              style={{
                backgroundColor: "#1C1210",
                paddingHorizontal: 18,
                paddingVertical: 10,
                borderRadius: 15,
                marginRight: 12,
                borderWidth: 1,
                borderColor: "#5A2E24",
              }}
            >
              <Text style={{ color: "#D7B49E", fontWeight: "600", fontFamily: "times new roman" }}>
                {item}
              </Text>
            </View>
          )
        )}
      </ScrollView>

      {/* RESULTS */}
      <View style={{ paddingHorizontal: 20, marginTop: 25 }}>
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
              style={{
                width: "100%",
                height: 190,
              }}
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

              <Text
                style={{
                  color: "#D7B49E",
                  marginTop: 10,
                  fontWeight: "600",
                  fontFamily: "times new roman",
                }}
              >
                {item.type}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}