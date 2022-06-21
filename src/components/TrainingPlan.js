import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { THEME } from "../theme";

export const TrainingPlan = ({ plan }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
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
            <View style={{ width: "100%" }}>
              {plan.days.map((day) => {
                if (day.drills.length !== 0) {
                  return (
                    <View style={styles.drillInfo} key={Date.now() + Math.random()}>
                      <Text
                        style={{ fontSize: 30, color: THEME.HEADLINE_TEXT }}
                      >
                        {day.day}
                      </Text>
                      {day.drills.map((drill) => {
                        return (
                          <View style={{ marginVertical: 20 }} key={Date.now() + Math.random()}>
                            <Text
                              style={{
                                fontSize: 20,
                                color: THEME.HEADLINE_TEXT,
                              }}
                            >
                              {drill.title}
                            </Text>
                            <View
                              style={{
                                flexDirection: "row",
                                justifyContent: "space-around",
                              }}
                            >
                              <Text style={{ color: THEME.HEADLINE_TEXT }}>
                                Подходы: {drill.approaches}
                              </Text>
                              <Text style={{ color: THEME.HEADLINE_TEXT }}>
                                Повторения: {drill.repeat}
                              </Text>
                              <Text style={{ color: THEME.HEADLINE_TEXT }}>
                                Отдых: {drill.rest} сек
                              </Text>
                            </View>
                          </View>
                        );
                      })}
                    </View>
                  );
                }
              })}
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: THEME.BUTTON,
                width: "70%",
                height: 40,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={{ fontWeight: "bold" }}>Хорошо</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={styles.plan}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <View style={{ justifyContent: "space-between" }}>
          <Text style={{ color: THEME.HEADLINE_TEXT, fontSize: 20 }}>
            {plan.title}
          </Text>
          <Text style={{ color: THEME.HEADLINE_TEXT }}>{plan.discription}</Text>
          <View style={{ flexDirection: "row", marginBottom: 10 }}>
            <AntDesign name="user" size={24} color={THEME.HEADLINE_TEXT} />
            <Text style={{ color: THEME.HEADLINE_TEXT }}>5</Text>
          </View>
        </View>
        <View style={styles.drills}>
          {plan.days.map((day) => {
            if (day.drills.length !== 0)
              return (
                <Text style={{ color: THEME.HEADLINE_TEXT }} key={Date.now() + Math.random()}>{day.day}</Text>
              );
          })}
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  plan: {
    height: 100,
    backgroundColor: THEME.BACKGROUND,
    borderTopWidth: 0.1,
    borderBottomWidth: 0.2,
    borderColor: THEME.HEADLINE_TEXT,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
  },
  drills: {
    flexDirection: "column",
  },
  text: {
    color: THEME.HEADLINE_TEXT,
  },
  centeredView: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: "100%",
    backgroundColor: THEME.BACKGROUND,
    borderColor: THEME.BACKGROUND_DATE,
    borderWidth: 3,
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});
