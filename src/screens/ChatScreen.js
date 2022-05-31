import React, { useEffect, useState } from "react";
import { StyleSheet, View, Button, ScrollView, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { loadClients } from "../store/actions/client";
import { BottomNavbar } from "../components/BottomNavbar";
import { THEME } from "../theme";

const Chat = ({ name, lastname, message }) => {
  return (
    <View style={styles.infoBlock}>
      <View style={styles.avatar}>
        <Text style={{ fontSize: 35 }}>
          {lastname[0]}
          {name[0]}
        </Text>
      </View>
      <View style={styles.name}>
        <Text style={styles.text}>
          {lastname} {name}
        </Text>
      </View>
    </View>
  );
};

export const ChatScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadClients());
  }, [dispatch]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title="New chat" onPress={() => navigation.navigate("Add")} />
      ),
    });
  });
  const allClients = useSelector((state) => state.client.allClients);
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* {allClients.map((client) => {
          return (
            <Client key={client.id} client={client.clientData} navigation={navigation} />
          );
        })} */}
        <Chat key={"01"} name={"Иван"} lastname={"Сидоров"} message={"hello"} />
        <Chat key={"02"} name={"Иван"} lastname={"Сидоров"} message={"hello"} />
        <Chat key={"03"} name={"Иван"} lastname={"Сидоров"} message={"hello"} />
        <Chat key={"04"} name={"Иван"} lastname={"Сидоров"} message={"hello"} />
        <Chat key={"05"} name={"Иван"} lastname={"Сидоров"} message={"hello"} />
      </ScrollView>
      <BottomNavbar navigation={navigation} />
    </View>
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
  containerStyle: {
    backgroundColor: THEME.BACKGROUND,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    alignSelf: "center",
    marginBottom: 10,
    marginStart: 10,
    marginEnd: 10,
    borderRadius: 15,
  },
  client: {
    height: 70,
    backgroundColor: THEME.BACKGROUND,
    width: "100%",
  },
  infoBlock: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: THEME.BACKGROUND,
    height: 70,
  },
  name: {
    borderBottomWidth: 0.2,
    borderTopWidth: 0.2,
    borderColor: THEME.PARAGRAPH,
    height: "100%",
    flex: 1,
    justifyContent: "center",
    marginLeft: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    backgroundColor: THEME.PARAGRAPH,
    borderRadius: 45,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 32,
    color: THEME.HEADLINE_TEXT,
  },
});
