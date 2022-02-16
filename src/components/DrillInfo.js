import { StyleSheet, Text, View, TextInput } from "react-native";
import React, {useState} from "react";

export const DrillInfo = () => {
  const [drill, setDrill] = useState({
    title: "",
    approach: 0,
    repeat: 0,
    rest: 0,
    discription: "",
  });
  const [drillTitle, setDrillTitle] = useState('')
  const updateTitle = (text) => {
    setDrill((prev) => {
      return {
        ...prev,
        title: text,
      };
    });
  };

  const updateApproach = (text) => {
    setDrill((prev) => {
      return {
        ...prev,
        approach: text,
      };
    });
  };

  const updateRepeat = (text) => {
    setDrill((prev) => {
      return {
        ...prev,
        repeat: text,
      };
    });
  };

  const updateRest = (text) => {
    setDrill((prev) => {
      return {
        ...prev,
        rest: text,
      };
    });
  };
  const updateDiscription = (text) => {
    setDrill((prev) => {
      return {
        ...prev,
        discription: text,
      };
    });
  };

  return (
    <View key={Date.now()}>
      <View>
        <TextInput
          placeholderTextColor={"white"}
          style={styles.textInput}
          onChangeText={(text) => updateTitle(text)}
          placeholder="Упражнение"
          value={drill.title}
        />
      </View>
      <View style={styles.wrapper}>
        <TextInput
          style={{ color: "white" }}
          placeholder="Подходы"
          placeholderTextColor={"white"}
          onChangeText={(text) => updateApproach(text)}
        />
        <TextInput
          style={{ color: "white" }}
          placeholder="Повторения"
          placeholderTextColor={"white"}
          onChangeText={(text) => updateRepeat(text)}
        />
        <TextInput
          style={{ color: "white" }}
          placeholder="Отдых"
          placeholderTextColor={"white"}
          onChangeText={(text) => updateRest(text)}
        />
      </View>
      <TextInput
        multiline={true}
        placeholderTextColor={"white"}
        placeholder="Краткое описание"
        style={styles.textInput}
        onChangeText={(text) => updateDiscription(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderBottomWidth: 0.5,
    borderColor: "white",
    color: "white",
    fontFamily: "Montserrat",
    fontSize: 20,
    justifyContent: "center",
    paddingTop: 5,
    paddingBottom: 5,
    paddingStart: 5,
    flex: 1,
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 0.4,
    borderColor: "white",
  },
});
