import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { THEME } from "../theme";

export const Navbar = (props) => {
  return (
    <View style={styles.navbar}>
      <View style={styles.topLine}></View>

      <View style={styles.container}>
        <TouchableOpacity onPress={props.onPress} style={styles.NavbarButton}>
          <Text style={styles.text}></Text>
        </TouchableOpacity>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 70,

    width: Dimensions.get("window").width,

    backgroundColor: THEME.NAVBAR_COLOR,
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
  NavbarButton: {
    marginRight: 15,
    width: 50,
    height: "100%",
    backgroundColor: "white",
  },
});
