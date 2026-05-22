import {
  useEffect,
  useState,
} from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import BottomTabNavigator from "./BottomTabNavigator";
import AuthNavigator from "./AuthNavigator";

export default function RootNavigator() {
  const [isLoggedIn, setIsLoggedIn] =
    useState(false);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    const value =
      await AsyncStorage.getItem(
        "isLoggedIn"
      );

    if (value === "true") {
      setIsLoggedIn(true);
    }

    setLoading(false);
  };

  if (loading) {
    return null;
  }

  return isLoggedIn ? (
   <BottomTabNavigator
  setIsLoggedIn={setIsLoggedIn}
/>
  ) : (
    <AuthNavigator
      setIsLoggedIn={setIsLoggedIn}
    />
  );
}