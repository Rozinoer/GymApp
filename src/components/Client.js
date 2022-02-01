import React from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { THEME } from "../theme";

export const Client = ({ client, navigation }) => {
  return (
    <Pressable
      style={styles.client}
      onPress={() => navigation.navigate("Info", { client: client })}
    >
      <View style={styles.infoBlock}>
        <View style={styles.avatar} />
        <View style={styles.name}>
          <Text style={styles.text}>
            {client.surname} {client.name}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  client: {
    height: 70,
    backgroundColor: "black",
    width: "100%",
  },
  infoBlock: {
    flex:1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name:{
    borderBottomWidth:0.2,
    borderTopWidth:0.2,
    borderColor: 'white',
    height:'100%',
    flex:1,
    justifyContent: 'center',
    marginLeft: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    backgroundColor: "#ebebeb",
    borderRadius: 45,
  },

  text: {
    fontSize: 32,
    color: "white",
  },
});
