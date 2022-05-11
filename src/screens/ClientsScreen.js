import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  ScrollView,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { Client } from "../components/Client";
import { useDispatch, useSelector } from "react-redux";
import { loadClients } from "../store/actions/client";
import { THEME } from "../theme";
import { SearchBarIosProps } from "react-native-elements";
import { BottomNavbar } from "../components/BottomNavbar";
import SearchBar from "react-native-elements/dist/searchbar/SearchBar-ios";

export const ClientsScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadClients());
  }, [dispatch]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title="New client" onPress={() => navigation.navigate("Add")} />
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
        <Client key={"01"} client={{name: "Иван", surname: "Сидоров"}} navigation={navigation} />
        <Client key={"02"} client={{name: "Константин", surname: "Зыков"}} navigation={navigation} />
        <Client key={"03"} client={{name: "Петр", surname: "Коваленко"}} navigation={navigation} />
        <Client key={"04"} client={{name: "Дарья", surname: "Блумкина"}} navigation={navigation} />
        <Client key={"05"} client={{name: "Мария", surname: "Иванова"}} navigation={navigation} />
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
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    alignSelf: "center",
    marginBottom: 10,
    marginStart: 10,
    marginEnd: 10,
    borderRadius: 15,
  },
});
