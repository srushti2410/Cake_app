import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import HomeStackNavigator from "./HomeStackNavigator";
import SearchScreen from "../screens/SearchScreen";
import OrdersScreen from "../screens/OrdersScreen";

import DrawerNavigator from "./DrawerNavigator";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator({
  setIsLoggedIn,
}: any) {
    const cartCount=1;
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#5A2E24",
        tabBarStyle: {
      backgroundColor: "#1C1210",
        height: 100,

        paddingTop: 10,
         paddingBottom: 10,
      
    },
 

        
      }}
    >
     <Tab.Screen
  name="Home"
  component={HomeStackNavigator}
  options={({ route }) => {
    const routeName =
      getFocusedRouteNameFromRoute(route) ?? "";

    return {
      headerShown: false,

      tabBarStyle: {
        display:
          routeName === "RestaurantDetail" ||
          routeName === "Cart"
            ? "none"
            : "flex",
             backgroundColor: "#1C1210",
              borderTopColor: "#2B1B17",
               height: 100,

        paddingTop: 10,
         paddingBottom: 10,
 
      },

      tabBarIcon: ({ color, size }) => (
        <Ionicons
          name="home"
          size={size}
          color={color}
        />
      ),
    };
  }}
/>

      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="search"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
       
   
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="bag"
              size={size}
              color={color}
            />
          ),
        }}
      />

     <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      >
        {(props) => (
          <DrawerNavigator
            {...props}
            setIsLoggedIn={setIsLoggedIn}
          />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}