import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../store/actions/auth";

export const SignInScreen = ({ navigation }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  
    const dispatch = useDispatch();
    const pressHandler = () => {
      dispatch(signIn())
    }
  return (
    <View style={styles.container}>
      <Text style={{color: 'red', fontSize: 44}}>GYM APP </Text>
      <TextInput
        placeholder="Username"
        placeholderTextColor={"white"}
        onChangeText={setUsername}
        textContentType="username"
        style={styles.textInput}
      ></TextInput>
      <TextInput
        placeholder="Password"
        placeholderTextColor={"white"}
        onChangeText={setPassword}
        textContentType="password"
        style={styles.textInput}
      ></TextInput>
      <View style={styles.button}>
      <Button  color="white" title="Sign in" onPress={pressHandler} ></Button>
      </View>
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
    fontSize: 18,
    borderRadius: 30,
    color: "white"
  },
  button: {
    backgroundColor:'grey',
    width:100,
    borderWidth:1,
    borderRadius: 30,
  },
});
