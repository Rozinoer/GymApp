import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function RegularPressableField(props) {
  return (
    <Pressable style={styles.regularField}>
      <Text style={styles.regularText}>{props.ex}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  regularField: {
    // boxSizing: 'border-box',
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    height: 110,
    justifyContent: "flex-start",
    alignItems: "center",
    // backgroundColor: '#123EAB',
    backgroundColor: "#292929",
    borderBottomWidth: 3,
    // borderBottomColor: '#3B14AF',
    width: "100%",
    // boxShadow: '0 2px 4px #210672',
  },
  regularText: {
    color: "#fff",
    fontSize: 32,
  },
});
