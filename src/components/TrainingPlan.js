import React, { useState } from "react";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from "react-native";
import { AntDesign, Ionicons, FontAwesome5 } from "@expo/vector-icons";

export const TrainingPlan = ({ navigation, plan }) => {
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
                    <View style={styles.drillInfo}>
                      <Text style={{ fontSize: 30 }}>{day.day}</Text>
                      {day.drills.map((drill) => {
                        return (
                          <View style={{ marginVertical: 20 }}>
                            <Text style={{fontSize:20}}>{drill.title}</Text>
                            <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                              <Text>Подходы {drill.approaches}</Text>
                              <Text>Повторения {drill.repeat}</Text>
                              <Text>Отдых {drill.rest}</Text>
                            </View>
                          </View>
                        );
                      })}
                    </View>
                  );
                }
              })}
            </View>
            <Button
              onPress={() => setModalVisible(!modalVisible)}
              title="Хорошо"
            ></Button>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={styles.plan}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <View style={{ justifyContent: "space-between" }}>
          <Text style={{ color: "white", fontSize: 20 }}>{plan.title}</Text>
          <Text style={{ color: "white" }}>{plan.discription}</Text>
          <View style={{ flexDirection: "row", marginBottom: 10 }}>
            <AntDesign name="user" size={24} color="white" />
            <Text style={{ color: "white" }}>5</Text>
          </View>
        </View>
        <View style={styles.drills}>
          {plan.days.map((day) => {
            if (day.drills.length !== 0)
              return <Text style={{ color: "white" }}>{day.day}</Text>;
          })}
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  plan: {
    height: 200,
    backgroundColor: "black",
    borderTopWidth: 0.1,
    borderBottomWidth: 0.2,
    borderColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
  },
  drills: {
    flexDirection: "column",
  },
  text: {
    color: "white",
  },
  centeredView: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  drillInfo: {
    
  },
  modalView: {
    width: "100%",
    backgroundColor: "white",
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
