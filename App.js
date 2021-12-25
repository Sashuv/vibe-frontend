import * as React from "react";
import { View, Text, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Details from "./screens/Details";
import Auth from "./screens/Auth";
import AuthLogin from "./screens/AuthLogin";
const Stack = createNativeStackNavigator();

export default function App() {
  StatusBar.setHidden(true);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="SignUp" component={Auth} />
        <Stack.Screen name="SignIn" component={AuthLogin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
