import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { sendMessage } from "../../store/actions/chats";
import { styles } from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";
import { THEME } from "../../theme";
import { auth } from "../../firebase";
export const ChatBar = ({messagesRef}) => {
  const [message, setMessage] = useState('')
  const dispatch = useDispatch();
  const handler = () => {
    setMessage('')
    dispatch(sendMessage(message,messagesRef, auth.currentUser.uid));
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.input}>
          <TextInput
            style={styles.textInput}
            placeholder={"Сообщение"}
            value={message}
            placeholderTextColor={THEME.PARAGRAPH}
            autoCapitalize={"none"}
            onChangeText={(text) => setMessage(text)}
          />
        </View>
        <Pressable onPress={handler}>
          <FontAwesome5
            name="paper-plane"
            size={24}
            color={THEME.HEADLINE_TEXT}
            style={{ paddingRight: 20 }}
          ></FontAwesome5>
        </Pressable>
      </View>
    </View>
  );
};
