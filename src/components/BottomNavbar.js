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
import { loadPlans } from "../db";
import { useSelector } from "react-redux";

export const BottomNavbar = ({ navigation }) => {
  const isCoach = useSelector((state) => state.auth.isCoach);
  return (
    <View style={styles.navbar}>
      {isCoach == true ? (
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Clients")}
        >
          <Ionicons name="people" size={24} color={"black"} />
        </TouchableOpacity>
      ) : null}
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
        onPress={async () => {
          const plan = await loadPlans();
        }}
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
    height: 90,
    flexDirection: "row",
    justifyContent: 'space-around',
    alignItems:'center',
    backgroundColor: THEME.SILVER,
  },
  text: {
    color: "white",
    fontSize: 24,
    paddingBottom: 5,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "white",
  },
  icon: {},
});
