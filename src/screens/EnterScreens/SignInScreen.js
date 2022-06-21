import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import { signIn } from "../../store/actions/auth";
import { THEME } from "../../theme";

export const SignInScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const login = () => {
    dispatch(signIn(username, password));
  };
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: THEME.HEADLINE_TEXT,
          fontSize: 44,
          fontFamily: "Montserrat",
        }}
      >
        RuFit+
      </Text>
      <TextInput
        placeholder="Логин"
        placeholderTextColor={THEME.PARAGRAPH}
        autoCapitalize={"none"}
        onChangeText={(text) => {
          setUsername(text);
        }}
        textContentType="username"
        style={styles.textInput}
      ></TextInput>
      <TextInput
        placeholder="Пароль"
        placeholderTextColor={THEME.PARAGRAPH}
        autoCapitalize={"none"}
        secureTextEntry={true}
        onChangeText={(text) => {
          setPassword(text);
        }}
        textContentType="password"
        style={styles.textInput}
      ></TextInput>
      <View style={styles.button}>
        <Button color={"white"} title="Войти" onPress={login}></Button>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")}>
        <Text style={styles.clientInfoTextDisc}>
          Нет аккаунта? Создайте здесь
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.BACKGROUND,
    justifyContent: "center",
    alignItems: "center",
  },
  clientInfoTextDisc: {
    color: THEME.HEADLINE_TEXT,
    fontSize: 12,
    fontFamily: "Montserrat",
  },
  textInput: {
    borderBottomWidth: 0.2,
    borderColor: THEME.PARAGRAPH,
    height: 50,
    width: 300,
    fontSize: 16,
    color: THEME.HEADLINE_TEXT,
    marginTop: 5,
    paddingTop: 20,
  },
  button: {
    backgroundColor: THEME.BUTTON,
    width: 200,
    borderWidth: 1,
    borderRadius: 30,
    marginTop: 10,
    marginBottom: 20,
  },
});
