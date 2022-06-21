import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BottomNavbar } from "../components/navbar/BottomNavbar";
import { ChatBar } from "../components/chatbar/ChatBar";
import { THEME } from "../theme";
import { loadDialog } from "../store/actions/chats";
import { Message } from "../components/message/Message";
import { auth } from "../firebase";
export const DialogScreen = ({ route, navigation }) => {
  const userId = route.params.userId;
  const messageRef = route.params.messageRef;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadDialog(userId, messageRef));
  }, []);
  const messages = useSelector((state) => state.chats.chatsHistory);
  const isLoading = useSelector((state) => state.chats.chatIsLoading);
  return (
    <>
      {isLoading ? (
        <>
          <View style={styles.wrapper}>
            <ScrollView contentContainerStyle={styles.scrollView}>
              {messages.map((message) => {
                console.log(message)
                return <Message key={message.key} flag={auth.currentUser.uid == message.sender} text={message.text}></Message>
              })}
            </ScrollView>
            <ChatBar messagesRef={messageRef} />
            <BottomNavbar navigation={navigation} />
          </View>
        </>
      ) : (
        <><Text>NOT READY</Text></>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: THEME.BACKGROUND,
  },
  scrollView: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
  },
});
