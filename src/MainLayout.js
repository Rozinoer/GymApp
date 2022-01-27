import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MainScreen } from "./screens/MainScreen";
import { AddNewClient } from "./screens/AddNewClient";
import { AboutClient } from "./screens/AboutClient";
import { ClientProgress } from "./screens/ClientProgress";
import { ClientEx } from "./screens/ClientEx";
import { AddNewEx } from "./screens/AddNewEx";
import { BottomNavbar } from "./components/BottomNavbar";

export const MainLayout = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Main">
          {(props) => <MainScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Add">
          {(props) => <AddNewClient {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Info">
          {(props) => <AboutClient {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Progress">
          {(props) => <ClientProgress {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Ex">
          {(props) => <ClientEx {...props} />}
        </Stack.Screen>
        <Stack.Screen name="AddEx">
          {(props) => <AddNewEx {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
