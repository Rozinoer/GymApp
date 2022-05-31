import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Button } from "react-native-elements/dist/buttons/Button";
import { DrillInfo } from "./DrillInfo";
import { ConsoleSqlOutlined } from "@ant-design/icons/lib/icons";
export const TrainingDay = () => {
  const [amountEx, setAmountEx] = useState(1);
  const [ex, setEx] = useState([]);
  const [day, setDay] = useState("");

  useEffect(() => {
    setEx((prev) => [...prev, <DrillInfo key={Date.now()} />]);
  }, [amountEx]);
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TextInput
          style={styles.textInput}
          placeholderTextColor={"white"}
          placeholder="День"
          value={day}
          onChangeText={(text) => setDay(text)}
        />
        <Button
          style={{ marginEnd: 5 }}
          onPress={() => setAmountEx((prev) => prev + 1)}
          title={"+"}
        ></Button>
      </View>
      {ex}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "white",
    borderWidth: 0.7,
    marginVertical: 20,
    backgroundColor: "rgb(14,14,14)",
    width: "95%",
  },

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
  text: {
    color: "white",
  },
});
