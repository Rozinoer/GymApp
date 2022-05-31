import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
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
        placeholder="Plan title"
        value={planTitle}
        onChangeText={(text) => setPlanTitle(text)}
      ></TextInput>
      <TextInput
        style={styles.textInput}
        multiline={true}
        placeholderTextColor={THEME.PARAGRAPH}
        placeholder="Discription"
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
    fontSize: 36,
    marginVertical: 10,
  },
  btn: {
    alignSelf: "center",
    height: 50,
    marginBottom: 40,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderColor: THEME.PARAGRAPH,
    borderWidth: 0.5,
  },
  txt: {
    color: THEME.HEADLINE_TEXT,
  },
});
