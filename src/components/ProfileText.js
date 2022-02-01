import { Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import * as Font from "expo-font";
import { FontAwesome5 } from "@expo/vector-icons";
import { isLoaded } from "expo-font";

export const ProfileText = ({ value, flag }) => {
    if (flag) {
      return <Text style={styles.clientInfoTextVal}>{value}</Text>;
    } else {
      return <Text style={styles.clientInfoTextDisc}>{value}</Text>;
    }
  
};

const styles = StyleSheet.create({
  clientInfoTextVal: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    fontFamily: "Montserrat",
  },
  clientInfoTextDisc: {
    color: "#dcdcdc",
    fontSize: 12,
    fontFamily: "Montserrat",
  },
});
