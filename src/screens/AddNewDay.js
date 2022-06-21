import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Modal,
  Alert,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addDay } from "../store/actions/drillPlan";
import { THEME } from "../theme";

export const AddNewDay = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [drillName, setDrillName] = useState("");
  const [approaches, setApproaches] = useState("");
  const [repeat, setRepeat] = useState("");
  const [rest, setRest] = useState("");
  const [drill, setDrill] = useState([]);
  const dispatch = useDispatch();

  const saveDay = () => {
    dispatch(addDay( title, drill ));
    navigation.navigate("AddNewPlan");
  };
  const saveDrill = () => {
    setDrill((prevState) => {
      return [...prevState, { drillName, approaches, repeat, rest }];
    });
    setDrillName("");
    setApproaches("");
    setRest("");
    setRepeat("");
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.TextInput}
        placeholder="День"
        placeholderTextColor={THEME.HEADLINE_TEXT}
        onChangeText={(text) => setTitle(text)}
      ></TextInput>
      <ScrollView>
        {drill.map((d) => {
          return (
            <View style={styles.drill} key={Date.now() + Math.random()}>
              <Text style={styles.text}>{d.drillName}</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.text}>Подходы: {d.approaches}</Text>
                <Text style={styles.text}>Повторения: {d.repeat}</Text>
                <Text style={styles.text}>Отдых: {d.rest}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
      <View style={{ marginBottom: 30 }}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={styles.text}>Добавить упражнение</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => saveDay()}>
          <Text style={styles.text}>Сохранить день</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              style={{ marginBottom: 10, fontSize: 20, color: THEME.HEADLINE_TEXT }}
              placeholderTextColor={THEME.PARAGRAPH}
              placeholder="Упражнение"
              onChangeText={(text) => setDrillName(text)}
            ></TextInput>
            <TextInput
              style={{ marginBottom: 10, fontSize: 20,color: THEME.HEADLINE_TEXT }}
              placeholderTextColor={THEME.PARAGRAPH}
              placeholder="Подходы"
              onChangeText={(text) => setApproaches(text)}
            ></TextInput>
            <TextInput
              style={{ marginBottom: 10, fontSize: 20,color: THEME.HEADLINE_TEXT }}
              placeholderTextColor={THEME.PARAGRAPH}
              placeholder="Повторения"
              onChangeText={(text) => setRepeat(text)}
            ></TextInput>
            <TextInput
              style={{ marginBottom: 10, fontSize: 20,color: THEME.HEADLINE_TEXT }}
              placeholderTextColor={THEME.PARAGRAPH}
              placeholder="Отдых"
              onChangeText={(text) => setRest(text)}
            ></TextInput>

            <TouchableOpacity style={{...styles.btn, marginTop: 20}} onPress={() => saveDrill()}>
              <Text style={styles.text}>Добавить</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.BACKGROUND,
  },
  TextInput: {
    color: THEME.HEADLINE_TEXT,
    fontFamily: "Montserrat",
    fontSize: 20,
    borderBottomColor: THEME.PARAGRAPH,
    borderWidth: 0.2,
    height: 50,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: "100%",
    margin: 20,
    backgroundColor: THEME.BACKGROUND,
    borderWidth: 3,
    borderColor: THEME.BACKGROUND_DATE,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  drill: {
    width: "100%",
    borderBottomColor: THEME.PARAGRAPH,
    borderBottomWidth: 0.2,
    marginVertical: 20,
  },
  btn: {
    alignSelf: "center",
    height: 50,
    marginBottom: 10,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: THEME.BUTTON,
    borderWidth: 0.5,
  },
  text: {
    color: THEME.HEADLINE_TEXT,
    fontFamily: "Montserrat",
  },
});
