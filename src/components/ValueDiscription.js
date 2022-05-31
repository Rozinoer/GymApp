import React from "react";
import { View, StyleSheet } from "react-native";

import { ProfileText } from "../components/ProfileText";

export const ValueDiscription = ({ value, discription, stylename }) => {
  let styleobject;

  if (stylename === "name") {
    styleobject = styles.name;
  } else if (stylename === "statistics") {
    styleobject = styles.statistics;
  }
  return (
    <View style={styleobject}>
      <ProfileText value={value} flag="1" />
      <ProfileText value={discription} />
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    justifyContent: "center",
    alignItems: "center",
  },
  statistics: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
