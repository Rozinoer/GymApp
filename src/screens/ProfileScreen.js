import { Link } from "@react-navigation/native";
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
import { useSelector, useDispatch } from "react-redux";
import { signOut, loadUserData } from "../store/actions/auth";

export const ProfileScreen = ({ navigation }) => {
  const user = useSelector((state) => state.auth.user);

  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL('https://' + user.network);

    if (supported) {
      await Linking.openURL(vk);
    } else {
      console.log("cant open url");
    }
  });
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(signOut());
  };
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button title="logout" onPress={logout} color={"white"} />,
    });
    dispatch(loadUserData());
  }, []);
  useEffect(() => {
    navigation.setOptions({
      headerShown: user ? true : false,
    });
  }, [user]);
  return (
    <>
      {user ? (
        <>
          <View style={styles.profile}>
            <View style={styles.wrapper}>
              <View style={styles.info}>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <ProfileText
                    value={user.name + " " + user.surname}
                    flag="1"
                  />
                  <ProfileText value={user.city + ', ' + user.country} />
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
                  <ProfileText value={user.aboutSelf} />
                  <Text
                    style={{
                      textAlign: "center",
                      marginTop: 5,
                      marginBottom: 15,
                    }}
                  >
                    <ProfileText value={user.aboutTraining} />
                  </Text>
                  <TouchableOpacity onPress={handlePress}>
                    <ProfileText value={user.network} />
                  </TouchableOpacity>
                  {/* <ProfileText value={user.phone} /> */}
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
        </>
      ) : (
        <>
          <View style={styles.activityIndecator}>
            <ActivityIndicator size={"large"} />
            <ProfileText value={"Loading..."} />
          </View>
        </>
      )}
    </>
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
    backgroundColor: "yellow",
    flex: 1,
  },
  navbar: {},
});
