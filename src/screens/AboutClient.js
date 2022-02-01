import React, { useState, useCallback } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { useDispatch } from "react-redux";
import { editClient } from "../store/actions/client";
import { BottomNavbar } from "../components/BottomNavbar";
import { ProfileText } from "../components/ProfileText";

export const AboutClient = ({ route, navigation }) => {
  const { client } = route.params;
  // const handlePress = useCallback(async () => {
  //   const supported = await Linking.canOpenURL(vk);

  //   if (supported) {
  //     await Linking.openURL(vk);
  //   } else {
  //     console.log("cant open url");
  //   }
  // }, ['']);
  let state = {
    id: client.id,
    name: client.name,
    surname: client.surname,
    height: client.height,
    weight: client.weight,
    data: client.data,
    phone: client.phone,
  };
  // const dispatch = useDispatch();

  // const editSave = () => {
  //   dispatch(editClient(state));
  //   setModalVisible(!modalVisible);
  // };

  return (
    <View style={styles.profile}>
      <View style={styles.wrapper}>
        <View style={styles.info}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <ProfileText value={state.name + ' ' +state.surname} flag="1" />
            <ProfileText value="Moscow, Russia" />
          </View>
          <View style={styles.clientInfo}>
           
          </View>
          <View
            style={{
              alignItems: "center",
              marginTop: 30,
              width: 300,
            }}
          >
            <TouchableOpacity onPress={''}>
              <ProfileText value={''} />
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
