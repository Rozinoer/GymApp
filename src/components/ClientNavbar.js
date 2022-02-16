import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { THEME } from "../theme";
export const ClientNavbar = ({ client, navigation }) => {
  return (
    <View style={styles.navbar}>
      <Button
        title="progress"
        onPress={() => navigation.navigate("Progress")}
      ></Button>
      <Button
        title="ex"
        onPress={() => navigation.navigate("Ex", { client: client })}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 60,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "black",
    flexDirection: "row",
  },
  text: {
    color: "white",
    fontSize: 24,
    paddingBottom: 5,
  },
});
