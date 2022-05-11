import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { BottomNavbar } from "../components/BottomNavbar";
import { ProfileText } from "../components/ProfileText";
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryLine,
} from "victory-native";
import { ScrollView } from "react-native-gesture-handler";

const data = [
  { quarter: 1, earnings: 70.0 },
  { quarter: 2, earnings: 70.4 },
  { quarter: 3, earnings: 71.1 },
  { quarter: 4, earnings: 71.5 },
];

export const AboutClient = ({ route, navigation }) => {
  const { client } = route.params;

  let state = {
    id: client.id,
    name: client.name,
    surname: client.surname,
    height: client.height,
    weight: client.weight,
    data: client.data,
    phone: client.phone,
    city: client.city,
    country: client.country,
  };
  return (
    <View style={styles.profile}>
      <View style={styles.wrapper}>
        <View style={styles.info}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <ProfileText value={state.name + " " + state.surname} flag="1" />
            <ProfileText value={"Moscow" + ", " + "Russia"} />
          </View>
          <View style={styles.clientInfo}>
            <View style={styles.statistics}>
              <ProfileText value="186" flag="1" />
              <ProfileText value="height" />
            </View>
            <View style={styles.statistics}>
              <ProfileText value="72" flag="1" />
              <ProfileText value="weight" />
            </View>
            <View style={styles.statistics}>
              <ProfileText value="21" flag="1" />
              <ProfileText value="age" />
            </View>
          </View>
          <View
            style={{
              alignItems: "center",
              marginTop: 30,
              width: 300,
            }}
          >
            <ProfileText value={state.aboutSelf} />
            <Text
              style={{
                textAlign: "center",
                marginTop: 5,
                marginBottom: 15,
              }}
            >
              <ProfileText value={state.aboutTraining} />
            </Text>
          </View>
          <View
            style={{
              // flexDirection: "row",
              justifyContent: "space-between",
              width: "70%",
              alignContent: "center",
            }}
          >
            <TouchableOpacity style={styles.btn}>
              <ProfileText value="Назначить тренировку" />
            </TouchableOpacity>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity style={styles.btn}>
                <ProfileText value="Тренировочный план" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                <ProfileText value=" Рацион  " />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.btn}>
              <ProfileText value="Написать" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.commonInfo}>
          <ScrollView>
            <VictoryChart
              width={350}
              height={200}
              theme={VictoryTheme.material}
            >
              <VictoryLine
                style={{
                  data: { stroke: "#c43a31" },
                  parent: { border: "1px solid #ccc" },
                }}
                data={[
                  { x: "Jan", y: 68 },
                  { x: "Feb", y: 69.7 },
                  { x: "Mar", y: 70.3 },
                  { x: "Apr", y: 70.3 },
                  { x: "May", y: 72 },
                ]}
              />
            </VictoryChart>
            <VictoryChart
              width={350}
              height={200}
              theme={VictoryTheme.material}
            >
              <VictoryLine
                style={{
                  data: { stroke: "#c43a31" },
                  parent: { border: "1px solid #ccc" },
                }}
                data={[
                  { x: "Jan", y: 68 },
                  { x: "Feb", y: 69.7 },
                  { x: "Mar", y: 70.3 },
                  { x: "Apr", y: 70.3 },
                  { x: "May", y: 72 },
                ]}
              />
            </VictoryChart>
          </ScrollView>
        </View>
      </View>
      <View style={styles.navbar}>
        <BottomNavbar navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  activityIndecator: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "black",
    width: "100%",
  },
  wrapper: {
    flex: 1,
    width: "100%",
    backgroundColor: "black",
  },
  info: {
    width: "100%",
    height: 400,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30
  },
  clientInfo: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    width: 250,
  },
  statistics: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  commonInfo: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
  },
  navbar: {
    width: "100%",
  },
  btn: {
    padding: 10,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    margin: 5,
    alignItems:'center'
  },
});
