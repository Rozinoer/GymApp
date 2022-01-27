import React from "react";
import { View, Button, TouchableOpacity, StyleSheet } from "react-native";

export default function RegularButton(props) {
  alert(props.onPress);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.regularButton} onPress={props.onPress}>
        {/*<Text style={{color: '#fff', fontSize: '34', padding: 10}}></Text>*/}
        <Text style={styles.regularText}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  regularButton: {
    justifyContent: "center",
    alignItems: "center",
    bottom: 20,

    width: 120,
    height: 120,
    borderRadius: 3,
    backgroundColor: "#292929",
    //    boxShadow: '0 2px 4px #210672'
    // backgroundColor: '#216Fd1',
    // boxShadow: '0 2px 4px #210672'
  },
});
