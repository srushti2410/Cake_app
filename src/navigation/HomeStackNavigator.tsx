import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import RestaurantDetailScreen from "../screens/RestaurantDetailScreen";
import CartScreen from "../screens/CartScreen";

const Stack = createNativeStackNavigator();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#1C1210",
        },

        headerTintColor: "#D7B49E",

        headerTitleStyle: {
          fontWeight: "bold",
            fontFamily: "times new roman",
            
        },

        

        animation: "slide_from_right",
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Cake Delights",
          headerBackTitle: "Back",
        
          headerTitleStyle: {
            fontSize: 24,
            fontFamily  :"times new roman",
            fontWeight: "bold",
          
            
          },
          
        }}
      />

      <Stack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
        options={{
          title: "Restaurant",
          headerBackTitle: "Home",
        }}
      />

      <Stack.Screen 
        name="Cart"
        component={CartScreen}
        options={{
          title: "Your Cart",
          headerBackTitle: "Back",
        }}
      />
    </Stack.Navigator>
  );
}