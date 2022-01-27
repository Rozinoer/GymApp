import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { THEME } from "../theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export const BottomNavbar = ({ navigation }) => {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Main")}
      >
        <AntDesign name="home" size={32} color="black" />
      </TouchableOpacity>

      {/* <TouchableOpacity
            style={styles.button}
            // onPress={props.navigate}
        >
            
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.button}
            // onPress={props.navigate}
        >
            
        </TouchableOpacity>*/}
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
    borderRadius: THEME.REGULAR_BORDER_RADIUS,

    // backgroundColor: THEME.SILVER,
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
