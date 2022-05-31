import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { VictoryChart, VictoryTheme, VictoryLine } from "victory-native";

import { BottomNavbar } from "../components/BottomNavbar";
import { ProfileText } from "../components/ProfileText";
import { ValueDiscription } from "../components/ValueDiscription";
import { THEME } from "../theme";

export const AboutClient = ({ route, navigation }) => {
  const { client } = route.params;

  return (
    <View style={styles.profile}>
      <View style={styles.wrapper}>
        <View style={styles.info}>
          <ValueDiscription
            value={client.name + " " + client.surname}
            discription={"Moscow" + ", " + "Russia"}
            stylename={"name"}
          />
          <View style={styles.clientInfo}>
            <ValueDiscription
              value={180}
              discription="height"
              stylename={"statistics"}
            />
            <ValueDiscription
              value={72}
              discription="weight"
              stylename={"statistics"}
            />
            <ValueDiscription
              value={21}
              discription="age"
              stylename={"statistics"}
            />
          </View>
          <View style={styles.about}>
            <ValueDiscription
              value={"*статус*"}
              discription={"Люблю йогу и танцы"}
              stylename={"statistics"}
            />
          </View>
          <View style={styles.action}>
            <ProfileText value="Назначить тренировку" buttom={true} />
            {/* <ProfileText value="Тренировочный план" buttom={true} />
            <ProfileText value="Рацион" buttom={true} /> */}
            <ProfileText value="Написать" buttom={true} />
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
  about: {
    alignItems: "center",
    marginTop: 30,
    width: 300,
  },
  wrapper: {
    flex: 1,
    width: "100%",
    backgroundColor: THEME.BACKGROUND,
  },
  info: {
    width: "100%",
    height: 350,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  clientInfo: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    width: 250,
  },
  commonInfo: {
    backgroundColor: THEME.HEADLINE_TEXT,
    flex: 1,
    alignItems: "center",
  },
  navbar: {
    width: "100%",
  },
  action: {
    marginTop: 30,
    justifyContent: "space-between",
    width: "70%",
    alignContent: "center",
  },
});
