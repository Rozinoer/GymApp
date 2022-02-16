import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ClientsScreen } from "./screens/ClientsScreen";
import { AddNewClient } from "./screens/AddNewClient";
import { AboutClient } from "./screens/AboutClient";
import { ClientProgress } from "./screens/ClientProgress";
import { ClientEx } from "./screens/ClientEx";
import { AddNewEx } from "./screens/AddNewEx";
import { AddNewPlan } from "./screens/AddNewPlan";
import { ProfileScreen } from "./screens/ProfileScreen";
import { SignInScreen } from "./screens/EnterScreens/SignInScreen";
import { SignUpScreen } from "./screens/EnterScreens/SignUpScreen";
import { ExBase } from "./screens/ExBase";
import { Button, Text } from "react-native";
import { THEME } from "./theme";
import { useSelector } from "react-redux";
import { AddNewDay } from "./screens/AddNewDay";

export const MainLayout = () => {
  const Stack = createNativeStackNavigator();

  const authToken = useSelector((state) => state.auth.userToken);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {authToken ? (
          <>
            <Stack.Screen
              name="Profile"
              component={ProfileScreen}
              options={{
                headerStyle: {
                  backgroundColor: "black",
                },
                headerTitleStyle: {
                  color: "white",
                },
              }}
            />
            <Stack.Screen
              name="Clients"
              component={ClientsScreen}
              options={{
                title: "List of clients",
                headerShadowVisible: false,
                headerSearchBarOptions: true,
                headerSearchBarOptions: {
                  barTintColor: THEME.SILVER,
                  onChangeText: (event) => setSearch(event.nativeEvent.text),
                },
                headerStyle: {
                  backgroundColor: "black",
                },
                headerTitleStyle: {
                  color: "white",
                },
              }}
            />
            <Stack.Screen name="AddNewPlan" component={AddNewPlan} />
            <Stack.Screen name="AddNewDay" component={AddNewDay} />
            <Stack.Screen name="Info" component={AboutClient} />
            <Stack.Screen
              name="ExBase"
              component={ExBase}
              options={{
                title: "Training plans",
                headerShadowVisible: false,
                headerSearchBarOptions: true,
                headerSearchBarOptions: {
                  barTintColor: THEME.SILVER,
                  onChangeText: (event) => setSearch(event.nativeEvent.text),
                },
                headerStyle: {
                  backgroundColor: "black",
                },
                headerTitleStyle: {
                  color: "white",
                },
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="SignInScreen"
              component={SignInScreen}
            />
            <Stack.Screen
              options={{
                headerStyle: { backgroundColor: "black" },
                headerTitle: "Registration",
                headerTitleStyle: { color: "white" },
              }}
              name="SignUpScreen"
              component={SignUpScreen}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
