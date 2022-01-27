import React from "react";
import { StyleSheet, Text, TextInput, View, Dimensions } from "react-native";
import { SaveClient } from "../components/SaveClient";
import { THEME } from "../theme";
import { BottomNavbar } from "../components/BottomNavbar";

export const AddNewClient = ({ navigation }) => {
  let state = {
    name: "",
    surname: "",
    height: "",
    weight: "",
    data: "",
    phone: "unavable",
  };
  const pressHandler = () => {
    navigation.navigate("Main");
  };

  return (
    <View style={styles.wrapper}>
      {/*<Navbar 
            title='Add'
            onPress= {pressHandler}
        />*/}

      <View style={styles.container}>
        <View style={styles.mainInfo}>
          <TextInput
            onChangeText={(text) => {
              if (text) state.surname = text;
            }}
            placeholder="surname"
            placeholderTextColor={THEME.SILVER}
            style={[styles.textinput, { color: "white" }]}
          ></TextInput>

          <TextInput
            style={styles.textinput}
            onChangeText={(text) => {
              if (text) state.name = text;
            }}
            placeholder="name"
            placeholderTextColor={THEME.SILVER}
            style={[styles.textinput, { color: "white" }]}
          ></TextInput>
        </View>

        <View style={{ paddingTop: 100 }}>
          <View style={styles.parametrs}>
            <Text style={styles.text}>Height</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => {
                if (text) state.height = text;
              }}
            ></TextInput>
          </View>
          <View style={styles.parametrs}>
            <Text style={styles.text}>Weight</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => {
                if (text) state.weight = text;
              }}
            ></TextInput>
          </View>
          <View style={styles.parametrs}>
            <Text style={styles.text}>Date of Birth</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => {
                if (text) state.data = text;
              }}
            ></TextInput>
          </View>
        </View>
        <View style={{ paddingTop: 100 }}>
          <TextInput
            style={styles.textinput}
            placeholder="phone"
            placeholderTextColor="grey"
            onChangeText={(text) => {
              if (text) state.phone = text;
            }}
          ></TextInput>
        </View>
        <Text style={styles.text}>{state.name}</Text>
        <View style={styles.buttonContainer}>
          <SaveClient
            style={styles.button}
            value={state}
            navigation={navigation}
          />
        </View>
      </View>

      <BottomNavbar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: Dimensions.get("window").height + 15,

    width: "100%",
    justifyContent: "space-between",
  },
  container: {
    justifyContent: "space-between",
    height: "90%",
    width: "100%",
    padding: 10,
    backgroundColor: THEME.BACKGROUND_COLOR,
    borderRadius: THEME.REGULAR_BORDER_RADIUS,
    color: "white",
    elevation: 2,
  },
  mainInfo: {
    margin: -15,
    padding: 15,
    paddingTop: 45,
    backgroundColor: THEME.CARROT,
    borderRadius: THEME.REGULAR_BORDER_RADIUS,
    elevation: 2,
  },
  input: {
    marginLeft: 15,
    borderBottomWidth: 1,
    borderColor: "#fff",
    width: 200,
    fontSize: 21,
    color: "grey",
  },
  buttonContainer: {
    padding: 0,
    marginBottom: 15,

    // alignSelf: 'flex-end',

    width: "100%",
    alignItems: "center",
  },
  button: {},
  parametrs: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
  },
  textinput: {
    fontSize: 36,
    marginBottom: 5,
    // borderBottomWidth: 1,
    // borderColor: '#fff',
    color: "grey",
  },
  text: {
    fontSize: 20,
    color: "grey",
  },
});
