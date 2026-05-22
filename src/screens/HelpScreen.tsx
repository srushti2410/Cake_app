import { View, Text, TouchableOpacity, ScrollView } from "react-native";

export default function HelpScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#0F0A09" }}>

      {/* TITLE */}
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: "#D7B49E",
          
          marginLeft: 20,
         
        }}
      >
        
      </Text>

      <View style={{ paddingHorizontal: 20 }}>

        {/* FAQ */}
        {[
          "How to place an order?",
          "How to track my order?",
          "Payment issues",
          "Refund policy",
          "Delivery timing",
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{
              backgroundColor: "#1C1210",
              padding: 18,
              borderRadius: 18,
              marginBottom: 15,
              borderWidth: 1,
              borderColor: "#5A2E24",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 16,
                fontWeight: "600",
              }}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}

        {/* CONTACT CARD */}
        <View
          style={{
            marginTop: 20,
            padding: 18,
            borderRadius: 18,
            backgroundColor: "#1C1210",
            borderWidth: 1,
            borderColor: "#5A2E24",
          }}
        >
          <Text style={{ color: "#D7B49E", fontWeight: "bold", fontSize: 16 }}>
            📞 Contact Support
          </Text>

          <Text style={{ color: "#aaa", marginTop: 6 }}>
            We are here 24/7 to help you 
          </Text>

          <Text style={{ color: "#fff", marginTop: 10 }}>
            support@cakeaurcode.com
          </Text>
        </View>

      </View>
    </ScrollView>
  );
}