import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ClientsScreen } from "./screens/ClientsScreen";
import { AddNewClient } from "./screens/AddNewClient";
import { AboutClient } from "./screens/AboutClient";
import { ClientProgress } from "./screens/ClientProgress";
import { ClientEx } from "./screens/ClientEx";
import { AddNewEx } from "./screens/AddNewEx";
import { ProfileScreen } from "./screens/ProfileScreen";
import { SignInScreen } from "./screens/EnterScreens/SignInScreen";
import { ExBase } from "./screens/ExBase";
import { Button, Text } from "react-native";
import { THEME } from "./theme";
import { useSelector } from "react-redux";

export const MainLayout = () => {
  const Stack = createNativeStackNavigator();

  const authToken = useSelector((state) => state.auth.userToken);
  
  return (
    <NavigationContainer>
      {authToken ? (
        <Stack.Navigator initialRouteName="Profile">
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen
            name="Clients"
            component={ClientsScreen}
            options={{
              title: "List of clients",
              headerShadowVisible: false,
              headerSearchBarOptions: true,
            }}
          />
          <Stack.Screen name="Add" component={AddNewClient} />
          <Stack.Screen name="Info" component={AboutClient} />
          <Stack.Screen
            name="ExBase"
            component={ExBase}
            options={{
              title: "Training plans",
              headerShadowVisible: false,
              headerSearchBarOptions: true,
            }}
          />
        </Stack.Navigator>
      ) : (
        <SignInScreen />
      )}
    </NavigationContainer>
  );
};
