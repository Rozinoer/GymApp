import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { BottomNavbar } from "../components/navbar/BottomNavbar";
import { THEME } from "../theme";
import { FontAwesome5 } from "@expo/vector-icons";

import { loadChats } from "../store/actions/chats";
import { Chat } from "../components/chat/Chat";

export const ChatScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("Add")}>
          <FontAwesome5
            name="envelope"
            size={24}
            color={THEME.HEADLINE_TEXT}
            style={{ paddingRight: 5 }}
          ></FontAwesome5>
        </TouchableOpacity>
      ),
    });
  }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadChats());
  }, [dispatch]);

  const chats = useSelector((state) => state.chats.chats);
  const isLoading = useSelector((state) => state.chats.isLoading);
  return (
    <>
      {!isLoading ? (
        <>
          <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
              {chats.map((item) => {
                return (
                  <Chat key={item.userId} user={item} navigation={navigation} />
                );
              })}
            </ScrollView>
            <BottomNavbar navigation={navigation} />
          </View>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    justifyContent: "center",
    alignItems: "center",
  },
});
