import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { BottomNavbar } from "../components/BottomNavbar";
import { THEME } from "../theme";
import { TrainingPlan } from "../components/TrainingPlan";
import { ScrollView } from "react-native";

export const ExBase = ({ navigation }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title="New plan" onPress={() => navigation.navigate("Add")} />
      ),
      headerSearchBarOptions: {
        barTintColor: THEME.SILVER,
        onChangeText: (event) => setSearch(event.nativeEvent.text),
      },
      headerStyle: {
        backgroundColor: "black",
      },
      headerTitleStyle: {
        color: "white",
      },
    });
  }, []);

  return (
    <View style={styles.profile}>
      <ScrollView style={styles.scrollView}>
        <TrainingPlan />
        <TrainingPlan />
      </ScrollView>

      <View>
        <BottomNavbar navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    flex: 1,
  },
  scrollView: {
  },
});
