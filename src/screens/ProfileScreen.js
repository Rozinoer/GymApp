import React, { useEffect } from "react";
import { View, StyleSheet, Button, ActivityIndicator } from "react-native";
import { BottomNavbar } from "../components/navbar/BottomNavbar";
import { ProfileText } from "../components/ProfileText";
import { useSelector, useDispatch } from "react-redux";
import { signOut, loadUserData } from "../store/actions/auth";
import { THEME } from "../theme";
import { ProfileTopbar } from "../components/profileTopbar/ProfileTopbar";
import { ProfileBotbar } from "../components/profileBotbar/ProfileBotbar";

export const ProfileScreen = ({ navigation }) => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="logout"
          onPress={() => {
            dispatch(signOut());
          }}
          color={"white"}
        />
      ),
    });
    dispatch(loadUserData());
  }, []);
  useEffect(() => {
    navigation.setOptions({
      headerShown: user ? true : false,
    });
  }, [user]);
  const test = {
    name: "Дарья Кичигина"
  }
  return (
    <>
      {user ? (
        <>
          <View style={styles.wrapper}>
            <ProfileTopbar user={user} />
            <ProfileBotbar user={user} test={test} />
            <BottomNavbar navigation={navigation} />
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
  wrapper: {
    backgroundColor: "white",
    flex: 1,
  },
  activityIndecator: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: THEME.BACKGROUND,
    width: "100%",
  },
});
