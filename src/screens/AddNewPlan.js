import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { THEME } from "../theme";
import { Button } from "react-native-elements/dist/buttons/Button";
import { useSelector, useDispatch } from "react-redux";
import { addPlan } from "../store/actions/drillPlan";

export const AddNewPlan = ({ navigation }) => {
  const [planTitle, setPlanTitle] = useState("");
  const [planDisc, setPlanDisc] = useState("");

  const dispatch = useDispatch();

  const savePlan = () => {
    dispatch(addPlan(planToSave, planTitle, planDisc));
  };

  const planToSave = useSelector((state) => state.drillPlan.planToSave);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholderTextColor={THEME.PARAGRAPH}
        placeholder="Название"
        value={planTitle}
        onChangeText={(text) => setPlanTitle(text)}
      ></TextInput>
      <TextInput
        style={styles.textInput}
        multiline={true}
        placeholderTextColor={THEME.PARAGRAPH}
        placeholder="Описание"
        value={planDisc}
        onChangeText={(text) => setPlanDisc(text)}
      ></TextInput>
      <Button
        title="Добавить день"
        onPress={() => {
          navigation.navigate("AddNewDay");
        }}
      ></Button>
      <ScrollView indicatorStyle={THEME.PARAGRAPH}>
        {planToSave.map((day) => {
          return (
            <Text key={Date.now() + Math.random()} style={{ color: THEME.HEADLINE_TEXT }}>
              {day.day}
            </Text>
          );
        })}
      </ScrollView>
      <TouchableOpacity style={styles.btn} onPress={savePlan}>
        <Text style={styles.txt}>Сохранить план</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.BACKGROUND,
    justifyContent: "space-between",
  },
  textInput: {
    borderBottomWidth: 0.2,
    borderColor: THEME.PARAGRAPH,
    color: THEME.HEADLINE_TEXT,
    fontFamily: "Montserrat",
    fontSize: 20,
    marginVertical: 10,
    height: 50,
  },
  btn: {
    alignSelf: "center",
    height: 50,
    marginBottom: 40,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor:THEME.BUTTON,
    borderWidth: 0.5,
  },
  txt: {
    color: THEME.HEADLINE_TEXT,
    fontFamily: "Montserrat",
  },
});
