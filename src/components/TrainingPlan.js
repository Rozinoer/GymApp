import React from "react";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export const TrainingPlan = ({ navigation }) => {
  return (
    <Pressable style={styles.plan}>
      <Text style={{ color: "white", fontSize: 20 }}>Plan name</Text>
      <Text style={{ color: "white" }}>plan discription</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  plan: {
    height: 200,
    backgroundColor: "black",
    borderTopWidth: 0.1,
    borderBottomWidth: 0.2,
    borderColor: "white",
  },
  text: {
    color: "white",
  },
});
