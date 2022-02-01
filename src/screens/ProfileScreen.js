import { Link } from "@react-navigation/native";
import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Linking,
  TouchableOpacity,
} from "react-native";
import { BottomNavbar } from "../components/BottomNavbar";
import { ProfileText } from "../components/ProfileText";

export const ProfileScreen = ({ navigation }) => {
  const vk = "https://vk.com/rozinoer";
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(vk);

    if (supported) {
      await Linking.openURL(vk);
    } else {
      console.log("cant open url");
    }
  }, [vk]);
  return (
    <View style={styles.profile}>
      <View style={styles.wrapper}>
        <View style={styles.info}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <ProfileText value="Evgenii Amosov" flag="1" />
            <ProfileText value="Moscow, Russia" />
          </View>
          <View style={styles.clientInfo}>
            <View style={styles.statistics}>
              <ProfileText value="5 753" flag="1" />
              <ProfileText value="followers" />
            </View>
            <View style={styles.statistics}>
              <ProfileText value="5 753" flag="1" />
              <ProfileText value="followers" />
            </View>
            <View style={styles.statistics}>
              <ProfileText value="5 753" flag="1" />
              <ProfileText value="followers" />
            </View>
          </View>
          <View
            style={{
              alignItems: "center",
              marginTop: 30,
              width: 300,
            }}
          >
            <ProfileText value="Personality coach in Lomov Gym" />
            <Text
              style={{
                textAlign: "center",
                marginTop: 5,
                marginBottom: 15,
              }}
            >
              <ProfileText value="Силовые тренировки,Функциональные тренировки и TRX" />
            </Text>
            <TouchableOpacity onPress={handlePress}>
              <ProfileText value={vk} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.commonInfo}>
          <Text>Profile screen</Text>
        </View>
      </View>
      <View style={styles.navbar}>
        <BottomNavbar navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    // backgroundColor: "green",
  },
  wrapper: {
    flex: 1,
    width: "100%",
    margin: 10,
    backgroundColor: "rgb(14,14,14)",
  },
  info: {
    width: "100%",
    height: 400,
    justifyContent: "center",
    alignItems: "center",
  },
  clientInfo: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    width: 250,
  },
  statistics: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  commonInfo: {
    backgroundColor: "yellow",
    flex: 1,
  },
  navbar: {},
});
