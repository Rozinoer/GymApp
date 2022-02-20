import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Linking,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { BottomNavbar } from "../components/BottomNavbar";
import { ProfileText } from "../components/ProfileText";

export const AboutClient = ({ route, navigation }) => {
  const { client } = route.params;

  let state = {
    id: client.id,
    name: client.name,
    surname: client.surname,
    height: client.height,
    weight: client.weight,
    data: client.data,
    phone: client.phone,
    city: client.city,
    country: client.country,
  };
  return (
    <View style={styles.profile}>
      <View style={styles.wrapper}>
        <View style={styles.info}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <ProfileText value={state.name + " " + state.surname} flag="1" />
            <ProfileText value={state.city + ", " + state.country} />
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
            <ProfileText value={state.aboutSelf} />
            <Text
              style={{
                textAlign: "center",
                marginTop: 5,
                marginBottom: 15,
              }}
            >
              <ProfileText value={state.aboutTraining} />
            </Text>
            {/* <TouchableOpacity onPress={handlePress}>
              <ProfileText value={state.network} />
            </TouchableOpacity> */}
            {/* <ProfileText value={user.phone} /> */}
          </View>
          <View style={{flexDirection:"row", justifyContent:'space-between', width: "70%"}}>
            <TouchableOpacity style={styles.btn}>
              <ProfileText value="Назначить тренировку" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <ProfileText value="Написать" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.commonInfo}>
          {/* <Text>Profile screen</Text> */}
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
  },
  activityIndecator: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "black",
    width: "100%",
  },
  wrapper: {
    flex: 1,
    width: "100%",
    backgroundColor: "black",
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
    backgroundColor: "white",
    flex: 1,
  },
  navbar: {
    width: "100%",
  },
  btn: {padding:10,borderWidth: 1, borderColor:'white', borderRadius: 10}
});
