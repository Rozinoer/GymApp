import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import {THEME} from '../theme'

export const ProfileText = ({ value, flag, buttom }) => {
  if (buttom) {
    return (
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.clientInfoTextDisc}>{value}</Text>
      </TouchableOpacity>
    );
  }
  if (flag) {
    return <Text style={styles.clientInfoTextVal}>{value}</Text>;
  } else {
    return <Text style={styles.clientInfoTextDisc}>{value}</Text>;
  }
};

const styles = StyleSheet.create({
  clientInfoTextVal: {
    color: THEME.HEADLINE_TEXT,
    fontWeight: "bold",
    fontSize: 18,
    fontFamily: "Montserrat",
  },
  clientInfoTextDisc: {
    color: THEME.HEADLINE_TEXT,
    fontSize: 12,
    fontFamily: "Montserrat",
  },
  btn: {
    padding: 10,
    borderRadius: 10,
    margin: 5,
    alignItems: "center",
    backgroundColor: THEME.BUTTON,
  },
});
