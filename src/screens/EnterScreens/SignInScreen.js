import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { signIn, signUp } from "../../store/actions/auth";
import { ProfileText } from "../../components/ProfileText";
import { THEME } from "../../theme";

export const SignInScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const login = () => {
    dispatch(signIn('test@test.com', "password"));
  };
  return (
    <View style={styles.container}>
      <Text style={{ color: "red", fontSize: 44 }}>GYM APP </Text>
      <TextInput
        placeholder="Username"
        placeholderTextColor={"white"}
        autoCapitalize={"none"}
        onChangeText={(text) => {
          setUsername(text);
        }}
        textContentType="username"
        style={styles.textInput}
      ></TextInput>
      <TextInput
        placeholder="Password"
        placeholderTextColor={"white"}
        autoCapitalize={"none"}
        secureTextEntry={true}
        onChangeText={(text) => {
          setPassword(text);
        }}
        textContentType="password"
        style={styles.textInput}
      ></TextInput>
      <View style={styles.button}>
        <Button color="white" title="Sign in" onPress={login}></Button>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")}>
        <ProfileText value={"Don`t have an account? Create here"} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    borderWidth: 0.2,
    borderColor: "white",
    height: 50,
    width: 300,
    fontSize: 12,
    borderRadius: 30,
    color: "white",
    marginTop: 5,
  },
  button: {
    backgroundColor: "grey",
    width: 200,
    borderWidth: 1,
    borderRadius: 30,
    marginTop: 10,
    marginBottom: 20,
  },
});
