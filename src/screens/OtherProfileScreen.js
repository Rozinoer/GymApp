import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import { VictoryChart, VictoryTheme, VictoryLine } from "victory-native";

import { ProfileTopbar } from "../components/profileTopbar/ProfileTopbar";
import { ProfileBotbar } from "../components/profileBotbar/ProfileBotbar";
import { BottomNavbar } from "../components/navbar/BottomNavbar";
import { THEME } from "../theme";

export const OtherProfileScreen = ({ route, navigation }) => {
  const { client } = route.params;
  const test = {
    name: "Евгений Амосов"
  }
  return (
    <View style={styles.wrapper}>
      <ProfileTopbar user={client} />
      <ProfileBotbar user={client} test={test}/>
      <BottomNavbar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "white",
    flex: 1,
  },

  action: {
    marginTop: 30,
    justifyContent: "space-between",
    width: "70%",
    alignContent: "center",
  },
});
