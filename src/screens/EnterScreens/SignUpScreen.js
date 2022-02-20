import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  TextInput,
  Switch,
} from "react-native";
import React, { useState } from "react";
import { ProfileText } from "../../components/ProfileText";
import { signUp } from "../../store/actions/auth";
import { useDispatch } from "react-redux";

const DATA = [
  {
    title: "Switch",
  },
  {
    title: "Name",
    placeholder: "Your name",
  },
  {
    title: "Surname",
    placeholder: "Your surname",
  },
  {
    title: "Phone",
    placeholder: "Your phonenumber",
  },
  {
    title: "Password",
    placeholder: "Your password",
  },
  {
    title: "Email",
    placeholder: "Your email",
  },
  {
    title: "City",
    placeholder: "Your city",
  },
  {
    title: "Country",
    placeholder: "Your country",
  },
  {
    title: "Social network",
    placeholder: "write...",
  },
  {
    title: "About me",
    placeholder: "write...",
  },
  {
    title: "About training",
    placeholder: "write...",
  },
];

export const SignUpScreen = ({ navigation }) => {

  const dispatch = useDispatch();
  const logup = () => {
    dispatch(signUp(selfInfo));
  };
  const [isEnabled, setIsEnabled] = useState('false');
  let selfInfo = {
    name: "",
    surname: "",
    email: "",
    password: "",
    phone: "",
    city: "",
    country: "",
    network: "",
    aboutme: "",
    abouttrain: "",
    isCoach: isEnabled,
  };
  const Item = ({ title, placeholder }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        placeholderTextColor={"white"}
        autoCapitalize={"none"}
        style={styles.input}
        placeholder={placeholder}
        onChangeText={(text) => {
          if (title === "Name")  selfInfo.name = text;
          if (title === "Surname") selfInfo.surname = text;
          if (title === "Email") selfInfo.email = text;
          if (title === "Password") selfInfo.password = text;
          if (title === "Phone") selfInfo.phone = text;
          if (title === "City") selfInfo.city = text;
          if (title === "Country") selfInfo.country = text;
          if (title === "Social network") selfInfo.network = text;
          if (title === "About me") selfInfo.aboutme = text;
          if (title === "About training") selfInfo.abouttrain = text;
        }}
      />
    </View>
  );
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const renderItem = ({ item }) => {
    if (item.title === "Switch") {
      return (
        <View
          style={{
            marginTop: 20,
            width: 350,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Text style={styles.switchText}>sportsman</Text>
          <Switch
            trackColor={{ false: "#3e3e3e", true: "#3e3e3e" }}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <Text style={styles.switchText}>fitness coach</Text>
        </View>
      );
    } else {
      return <Item title={item.title} placeholder={item.placeholder} />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
      />
      <TouchableOpacity style={styles.btn} onPress={logup}>
        <ProfileText value={"create account"} flag={1} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  scroll: {
    flex: 1,
  },
  item: {
    width: 350,
    marginVertical: 18,
    alignSelf: "center",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "white",
    fontSize: 20,
    fontFamily: "Montserrat",
    color: "white",
  },
  title: {
    fontSize: 32,
    color: "white",
    marginBottom: 15,
    fontFamily: "Montserrat",
  },
  switchText: {
    fontSize: 12,
    color: "white",
    fontFamily: "Montserrat",
  },
  btn: {
    marginBottom: 50,
    marginTop: 50,
    borderWidth: 1,
    borderColor: "white",
    height: 50,
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});
