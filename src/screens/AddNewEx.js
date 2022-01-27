import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  Modal,
  Dimensions,
} from "react-native";
import { useDispatch } from "react-redux";
import { addClientEx } from "../store/actions/client";
import { THEME } from "../theme";
import { BottomNavbar } from "../components/BottomNavbar";

export const AddNewEx = ({ route, navigation }) => {
  const [approaches, setApproaches] = useState(0);
  const [repetittions, setRepetittions] = useState(0);

  const { client } = route.params;

  let state = {
    name: "",
    weight: "",
    approaches: "",
    repetitions: "",
    rest: "",
    id: "",
    clientID: client.id,
  };

  const dispatch = useDispatch();

  const add = () => {
    dispatch(addClientEx(state));
    navigation.navigate("Info");
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={[styles.descriptionContainer, styles.section]}>
          <View style={[styles.add, styles.addEx]}>
            <TextInput
              style={[styles.textinput, styles.tittleTextInput]}
              onChangeText={(text) => {
                if (text) state.name = text;
              }}
              placeholder="Название"
              placeholderTextColor="grey"
            ></TextInput>
          </View>
        </View>
        <View style={[styles.weightContainer, styles.section]}>
          <TextInput
            style={styles.textinput}
            onChangeText={(text) => {
              if (text) state.weight = text;
            }}
            placeholder="Вес"
            placeholderTextColor="grey"
          ></TextInput>
        </View>
        <View style={[styles.approachesContainer, styles.section]}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setApproaches(approaches - 1);
            }}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>

          <TextInput
            style={styles.textinput}
            onChangeText={(text) => {
              if (text) state.approaches = text;
            }}
            placeholder={approaches === 0 ? "Подходы" : approaches.toString()}
            placeholderTextColor="grey"
          ></TextInput>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setApproaches(approaches + 1);
            }}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.repetitionsContainer, styles.section]}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setRepetittions(repetittions - 1);
            }}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>

          <TextInput
            style={styles.textinput}
            onChangeText={(text) => {
              if (text) state.repetitions = text;
            }}
            placeholder={
              repetittions === 0 ? "Повторения" : repetittions.toString()
            }
            placeholderTextColor="grey"
          ></TextInput>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setRepetittions(repetittions + 1);
            }}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.restContainer, styles.section]}>
          <TextInput
            style={[styles.textinput, styles.restTextInput]}
            onChangeText={(text) => {
              if (text) state.rest = text;
            }}
            placeholder="Время отдыха"
            placeholderTextColor="grey"
          ></TextInput>
        </View>

        <TouchableOpacity
          style={styles.save}
          onPress={() => {
            add();
          }}
        >
          <Text style={styles.buttonText}>Сохранить</Text>
        </TouchableOpacity>
      </View>
      <BottomNavbar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: Dimensions.get("window").height + 15,
    minWidth: 300,

    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: THEME.BACKGROUND_COLOR,
  },
  container: {
    paddingTop: 15,
    justifyContent: "space-between",
    height: "90%",
    width: "100%",
    paddingHorizontal: 20,
    backgroundColor: "white",
    borderRadius: THEME.REGULAR_BORDER_RADIUS,
    elevation: 2,
  },
  section: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 45,
  },
  descriptionContainer: {
    width: "90%",
  },
  restContainer: {},

  tittleTextInput: {
    width: "90%",
  },
  restTextInput: {
    width: "90%",
  },

  approachesContainer: {},

  textinput: {
    maxWidth: 250,
    width: "40%",
    flexDirection: "row",
    marginHorizontal: 20,
    textAlign: "center",
    flexWrap: "wrap",
    fontSize: THEME.REGULAR_FONT_SIZE,
    color: "grey",

    // border: 'none'
  },
  descriptionText: {},

  save: {
    marginVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: THEME.REGULAR_BORDER_RADIUS,
    backgroundColor: THEME.CARROT,
    elevation: 2,
  },
  buttonText: {
    color: "#fff",
    fontSize: 32,
  },

  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: THEME.CARROT,
    // boxShadow: '0 2px 4px #210672'
    elevation: 2,
  },

  buttonStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },

  buttonText: {
    textAlignVertical: "center",
    textAlign: "center",
    flexDirection: "row",
    color: "#fff",
    fontSize: 32,
  },

  add: {
    textAlign: "center",

    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,

    flexDirection: "row",

    borderRadius: 3,
  },
  addEx: {},
});
