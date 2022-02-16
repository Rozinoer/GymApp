import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { THEME } from "../theme";
import { AntDesign, Ionicons, FontAwesome5 } from "@expo/vector-icons";

export const BottomNavbar = ({ navigation }) => {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Clients")}
      >
        <Ionicons name="people" size={24} color={"black"} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ExBase")}
      >
        <FontAwesome5 name="dumbbell" size={24} color={"black"} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Profile")}
      >
        <Ionicons name="home" size={36} color={"black"} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Clients")}
      >
        <FontAwesome5 name="carrot" size={24} color={"black"} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Clients")}
      >
        <AntDesign name="wechat" size={24} color={"black"} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    paddingHorizontal: 15,
    height: 90,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: Dimensions.get("window").width,

    backgroundColor: THEME.SILVER,
    // elevation: 2,
  },
  container: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  topLine: {
    flex: 1,
    height: 25,
    width: "100%",
    backgroundColor: "white",
  },
  text: {
    color: "white",
    fontSize: 24,
    paddingBottom: 5,
  },
  button: {
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "white",
    elevation: 2,
  },
  icon: {},
});
