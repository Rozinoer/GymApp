import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default class RegularField extends React.Component {
  render() {
    return <View style={styles.regularField}></View>;
  }
}

const styles = StyleSheet.create({
  regularField: {
    cursor: "pointer",
    boxSizing: "border-box",
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
    boxShadow: "0 2px 4px #210672",
  },
});
