import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import { View, Text, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import ProfileScreen from "../screens/ProfileScreen";
import OrdersScreen from "../screens/OrdersScreen";
import SettingsScreen from "../screens/SettingsScreen";
import HelpScreen from "../screens/HelpScreen";

const Drawer = createDrawerNavigator();

function CustomDrawerContent({ setIsLoggedIn, ...props }: any) {
  return (
    <DrawerContentScrollView {...props} style={{ backgroundColor: "#0F0A09" }}>
      {/* PROFILE HEADER */}
      <View
        style={{
          alignItems: "center",
          paddingVertical: 25,
          borderBottomWidth: 1,
          borderBottomColor: "#5A2E24",
          marginBottom: 10,
        }}
      >
        <Image
          source={{
            uri: "https://thumbs.dreamstime.com/b/woman-holding-birthday-cake-one-candle-beautiful-cartoon-style-illustration-woman-holding-two-tiered-birthday-cake-392837599.jpg",
          }}
          style={{
            width: 80,
            height: 80,
            borderRadius: 40,
            borderWidth: 2,
            borderColor: "#5A2E24",
            marginBottom: 10,
          }}
        />

        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "#D7B49E",
              fontFamily: "times new roman",
          }}
        >
          Cake_Aur_Code
        </Text>

        <Text style={{ color: "#aaa", fontSize: 12, marginTop: 4 , fontFamily: "times new roman", }}>
          Premium Chocolate User
        </Text>
      </View>

      {/* MENU ITEMS */}
      <DrawerItemList {...props} />

      {/* LOGOUT */}
      <View style={{ marginTop: 20 }}>
        <DrawerItem




          label="Logout "
          labelStyle={{ color: "#D7B49E", fontWeight: "bold", fontFamily: "times new roman" }}
          onPress={async () => {
            await AsyncStorage.removeItem("isLoggedIn");
            setIsLoggedIn(false);
          }}
        />
      </View>
    </DrawerContentScrollView>
  );
}

export default function DrawerNavigator({ setIsLoggedIn }: any) {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawerContent {...props} setIsLoggedIn={setIsLoggedIn} />
      )}
      screenOptions={{
        headerStyle: {
          backgroundColor: "#1C1210",
        },
        headerTintColor: "#D7B49E",
        drawerStyle: {
          backgroundColor: "#1C1210",
        },
        drawerActiveTintColor: "#D7B49E",
        drawerInactiveTintColor: "#aaa",
        drawerLabelStyle: { fontSize: 16, fontFamily: "times new roman" },
      }}
    >
      <Drawer.Screen name="Profile Home" component={ProfileScreen} />
      <Drawer.Screen name="My Orders" component={OrdersScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Help" component={HelpScreen} />
    </Drawer.Navigator>
  );
}
