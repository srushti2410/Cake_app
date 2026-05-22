import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function ProfileScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#0F0A09" }}>

      {/* TOP SECTION */}
      <View
        style={{
          alignItems: "center",
          paddingTop: 70,
          paddingBottom: 35,
        }}
      >
        <Image
          source={{
            uri: "https://thumbs.dreamstime.com/b/woman-holding-birthday-cake-one-candle-beautiful-cartoon-style-illustration-woman-holding-two-tiered-birthday-cake-392837599.jpg",
          }}
          style={{
            width: 120,
            height: 120,
            borderRadius: 60,
            borderWidth: 3,
            borderColor: "#5A2E24",
          }}
        />

        <Text
          style={{
            color: "#D7B49E",
            fontSize: 28,
            fontWeight: "bold",
            marginTop: 18,
            fontFamily: "times new roman",
          }}
        >
          Cake_Aur_Code 
        </Text>

        <Text style={{ color: "#aaa", marginTop: 6 , fontFamily: "times new roman", }}>
          Premium Chocolate Lover
        </Text>
      </View>

      {/* STATS */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginHorizontal: 20,
          marginBottom: 30,
        }}
      >
        {[
          { title: "Orders", value: "120" },
          { title: "Favorites", value: "45" },
          { title: "Reviews", value: "89" },
        ].map((item, index) => (
          <View
            key={index}
            style={{
              backgroundColor: "#1C1210",
              width: 100,
              paddingVertical: 20,
              borderRadius: 22,
              alignItems: "center",
              borderWidth: 1,
              borderColor: "#5A2E24",
            }}
          >
            <Text
              style={{
                color: "#D7B49E",
                fontSize: 24,
                fontWeight: "bold",
                fontFamily: "times new roman",
              }}
            >
              {item.value}
            </Text>

            <Text style={{ color: "#aaa", marginTop: 6 , fontFamily: "times new roman",}}>
              {item.title}
            </Text>
          </View>
        ))}
      </View>

      {/* OPTIONS */}
      <View style={{ paddingHorizontal: 20 }}>
        {[
          "Edit Profile",
          "Saved Address",
          "Payment Methods",
          "Notifications",
          "Help Center",
          "Settings",
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{
              backgroundColor: "#1C1210",
              padding: 20,
              borderRadius: 20,
              marginBottom: 16,
              borderWidth: 1,
              borderColor: "#5A2E24",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 16,
                fontWeight: "600",
                fontFamily: "times new roman",
              }}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}

        {/* LOGOUT */}
        <TouchableOpacity
          style={{
            backgroundColor: "#1C1210",
            padding: 20,
            borderRadius: 20,
            marginTop: 10,
            marginBottom: 40,
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#D7B49E",
          }}
        >
          <Text
            style={{
              color: "#D7B49E",
              fontWeight: "bold",
              fontSize: 17,
              fontFamily: "times new roman",
            }}
          >
            Logout 
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}