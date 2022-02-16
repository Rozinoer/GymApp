import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Modal,
  Alert,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addDay } from "../store/actions/drillPlan";

export const AddNewDay = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [drillName, setDrillName] = useState("");
  const [approaches, setApproaches] = useState("");
  const [repeat, setRepeat] = useState("");
  const [rest, setRest] = useState("");
  const [drill, setDrill] = useState([]);
  const dispatch = useDispatch();

  const saveDay = () => {
    dispatch(addDay({ title, drill }));
    navigation.navigate('AddNewPlan')
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
        placeholder="День недели"
        placeholderTextColor={"white"}
        onChangeText={(text) => setTitle(text)}
      ></TextInput>
      <ScrollView>
        {drill.map((d) => {
          return (
            <View style={styles.drill} key={Date.now()}>
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
      <Button
        title="Добавить упражнение"
        onPress={() => setModalVisible(!modalVisible)}
      ></Button>
      <Button onPress={() => saveDay()} title="Сохранить день"></Button>

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
              placeholder="Упражнения"
              onChangeText={(text) => setDrillName(text)}
            ></TextInput>
            <TextInput
              placeholder="Подходы"
              onChangeText={(text) => setApproaches(text)}
            ></TextInput>
            <TextInput
              placeholder="Повторения"
              onChangeText={(text) => setRepeat(text)}
            ></TextInput>
            <TextInput
              placeholder="Отдых"
              onChangeText={(text) => setRest(text)}
            ></TextInput>
            <Button onPress={() => saveDrill()} title="Добавить"></Button>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  TextInput: {
    color: "white",
    fontFamily: "Montserrat",
    fontSize: 25,
    borderBottomColor: "white",
    borderWidth: 0.2,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
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
    borderBottomColor: "white",
    borderBottomWidth: 0.2,
    marginVertical: 20,
  },
  text: {
    color: "white",
  },
});
