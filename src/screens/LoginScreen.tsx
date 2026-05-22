import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

export default function LoginScreen({ setIsLoggedIn }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (email && password) {
      await AsyncStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        backgroundColor: "#0F0A09",
      }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: "#0F0A09",
        }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "#0F0A09",
            justifyContent: "center",
            paddingHorizontal: 20,
            paddingBottom: 40,
          }}
        >
          {/* IMAGE */}
          <Image
            source={{
              uri: "https://img.freepik.com/free-photo/delicious-dessert-table_23-2150857740.jpg",
            }}
            style={{
              width: "100%",
              height: 220,
              borderRadius: 15,
              marginBottom: 30,
              borderWidth: 1,
              borderColor: "#5A2E24",
            }}
          />

          {/* TITLE */}
          <Text
            style={{
              fontSize: 38,
              fontWeight: "bold",
              color: "#D7B49E",
              fontFamily: "serif",
            }}
          >
            Welcome
          </Text>

          <Text
            style={{
              color: "#aaa",
              fontSize: 16,
              marginTop: 8,
              marginBottom: 30,
              fontFamily: "serif",
            }}
          >
            Login to continue your dessert
          </Text>

          {/* EMAIL */}
          <TextInput
            placeholder="Enter Email"
            placeholderTextColor="#888"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="email"
            textContentType="emailAddress"
            style={{
              backgroundColor: "#1C1210",
              padding: 18,
              borderRadius: 18,
              marginBottom: 18,
              fontSize: 16,
              fontFamily: "serif",
              color: "#fff",
              borderWidth: 1,
              borderColor: "#5A2E24",
            }}
          />

          {/* PASSWORD */}
          <TextInput
            placeholder="Enter Password"
            placeholderTextColor="#888"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoComplete="password"
            textContentType="password"
            style={{
              backgroundColor: "#1C1210",
              padding: 18,
              borderRadius: 18,
              marginBottom: 25,
              fontSize: 16,
              color: "#fff",
              borderWidth: 1,
              borderColor: "#5A2E24",
              fontFamily: "serif",
            }}
          />

          {/* BUTTON */}
          <TouchableOpacity
            onPress={handleLogin}
            style={{
              backgroundColor: "#210E0A",
              padding: 20,
              borderRadius: 20,
              alignItems: "center",
              shadowColor: "#000",
              shadowOpacity: 0.3,
              shadowRadius: 10,
              elevation: 5,
            }}
          >
            <Text
              style={{
                color: "#D7B49E",
                fontSize: 18,
                fontWeight: "bold",
                fontFamily: "serif",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
