import { View, Text, TouchableOpacity, ScrollView } from "react-native";

export default function SettingsScreen() {
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

        {[
          "Account Settings",
          "Privacy & Security",
          "Notification Settings",
          "App Theme",
          "Language",
          "Help & Support",
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

        {/* VERSION CARD */}
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
          <Text style={{ color: "#D7B49E", fontWeight: "bold" }}>
            App Version
          </Text>

          <Text style={{ color: "#aaa", marginTop: 5 }}>
            Chocolate App v1.0.0
          </Text>
        </View>

      </View>
    </ScrollView>
  );
}