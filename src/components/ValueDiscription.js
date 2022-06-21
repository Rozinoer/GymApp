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
      {discription ? <ProfileText value={discription} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    justifyContent: "center",
    alignItems: "center",
  },
  statistics: {
    justifyContent: "center",
    alignItems: "center",
  },
});
