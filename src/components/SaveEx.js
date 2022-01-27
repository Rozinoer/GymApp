import React from "react";
import { StyleSheet, View, Button, TouchableOpacity, Text } from "react-native";

export const SaveEx = ({ onSubmit, value, navigation }) => {
  const presHandler = () => {
    onSubmit(value);
    navigation.navigate("Main");
  };

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={presHandler}>
        <Text
          style={{
            color: "white",
            fontSize: 32,
          }}
        ></Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    bottom: 20,

    width: 120,
    height: 90,
    borderRadius: 3,
    backgroundColor: "#292929",
    // boxShadow: '0 2px 4px #210672'
  },
});
