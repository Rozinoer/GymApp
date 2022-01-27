import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Pressable,
  Modal,
  TextInput,
} from "react-native";
import { Client } from "../components/Client";
import { useDispatch, useSelector } from "react-redux";
import { loadClients } from "../store/actions/client";
import { THEME } from "../theme";
import { Navbar } from "../components/Navbar";
import { BottomNavbar } from "../components/BottomNavbar";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export const MainScreen = ({ navigation }) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadClients());
  }, [dispatch]);

  const allClients = useSelector((state) => state.client.allClients);
  return (
    <View style={styles.wrapper}>
      {/* <Navbar 
          title= 'GYM'
        /> */}
      <View style={styles.clients}>
        <View style={styles.clientsLabel}>
          <Text style={styles.clientsLabelText}>Клиенты</Text>
        </View>

        {allClients.map((client) => {
          return (
            <Client key={client.id} client={client} navigation={navigation} />
          );
        })}
      </View>

      <View style={[styles.add, styles.addClient]}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate("Add")}
        >
          <Ionicons name="ios-person-add-outline" size={55} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.input}
              placeholder="Название упражнения"
              onChangeText={(text) => {
                name = text;
              }}
            ></TextInput>
            <View style={{ flexDirection: "row" }}>
              <Pressable
                style={styles.button}
                onPress={() => {
                  addEx(name);
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textButton}>Cохранить</Text>
              </Pressable>
              <Pressable
                style={styles.button}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textButton}>Назад</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <BottomNavbar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "space-between",
    margin: 0,
    // paddingHorizontal: 15,
    width: "100%",
    height: "100%",
    // backgroundColor: '#FFC040'
    backgroundColor: THEME.BACKGROUND_COLOR,
  },

  clients: {
    width: "100%",

    padding: 15,
    alignItems: "center",
    backgroundColor: THEME.CARROT,
    borderRadius: THEME.REGULAR_BORDER_RADIUS,
    elevation: 2,
  },
  clientsLabel: {
    marginTop: -15,

    marginBottom: 15,
    paddingVertical: 15,
    paddingTop: 35,
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "center",
    fontSize: THEME.HEADER_FONT_SIZE,
    backgroundColor: THEME.CARROT,
    color: "grey",
    // borderRadius: THEME.REGULAR_BORDER_RADIUS,
    elevation: 4,
  },
  clientsLabelText: {
    color: "white",
    fontSize: THEME.HEADER_FONT_SIZE,
  },
  add: {
    position: "absolute",
    bottom: 15,
    right: 15,
    justifyContent: "center",
    alignItems: "center",

    justifyContent: "space-between",
    width: "100%",

    width: 120,
    height: 120,
    borderRadius: THEME.REGULAR_BORDER_RADIUS,
    backgroundColor: THEME.CARROT,
    elevation: 2,
  },
  addEx: {
    left: 20,
  },

  buttonStyle: {
    width: "100%",
    height: "100%",

    justifyContent: "center",
    alignItems: "center",

    borderRadius: 3,
  },

  buttonText: {
    textAlign: "center",
    // width: '100%',
    // height: '100%',
    justifyContent: "center",
    alignItems: "center",

    color: "white",
    fontSize: 92,
    paddingBottom: 15,
  },
  button: {
    backgroundColor: "black",
    borderRadius: 4,
    width: "48%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50%",
  },
  modalView: {
    margin: 50,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  input: {
    fontSize: 36,
    borderBottomWidth: 2,
    width: 200,
  },
  textButton: {
    color: "white",
  },
  button: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 3,
    backgroundColor: "#292929",
    elevation: 3,
  },
});
