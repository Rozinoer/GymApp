import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ClientsScreen } from "./screens/ClientsScreen";
import { OtherProfileScreen } from "./screens/OtherProfileScreen";
import { AddNewPlan } from "./screens/AddNewPlan";
import { ProfileScreen } from "./screens/ProfileScreen";
import { SignInScreen } from "./screens/EnterScreens/SignInScreen";
import { SignUpScreen } from "./screens/EnterScreens/SignUpScreen";
import { ExBase } from "./screens/ExBase";
import { THEME } from "./theme";
import { useSelector } from "react-redux";
import { AddNewDay } from "./screens/AddNewDay";
import { ChatScreen } from "./screens/ChatScreen";
import { DialogScreen } from "./screens/DialogScreen";
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
                title: "Подопечные",
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

            <Stack.Screen
              name="ChatScreen"
              component={ChatScreen}
              options={{
                title:'Чаты',
                headerStyle: {
                  backgroundColor: "black",
                },
                headerTitleStyle: {
                  color: "white",
                },
              }}
            />
            <Stack.Screen name="DialogScreen" component={DialogScreen}               options={{
                headerStyle: {
                  backgroundColor: "black",
                },
                headerTitleStyle: {
                  color: "white",
                },
              }} />
            <Stack.Screen name="AddNewPlan" component={AddNewPlan} />
            <Stack.Screen name="AddNewDay" component={AddNewDay} />
            <Stack.Screen
              name="Info"
              component={OtherProfileScreen}
              options={{
                title: "",
                headerShadowVisible: false,
                headerStyle: {
                  backgroundColor: "black",
                },
                headerTitleStyle: {
                  color: "white",
                },
              }}
            />
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
