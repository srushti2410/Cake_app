import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";

const Stack = createNativeStackNavigator();

export default function AuthNavigator({
  setIsLoggedIn,
}: any) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        options={{
          headerShown: false,
        }}
      >
        {(props) => (
          <LoginScreen
            {...props}
            setIsLoggedIn={setIsLoggedIn}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}