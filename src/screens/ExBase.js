import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Button,
  ActivityIndicator,
} from "react-native";
import { BottomNavbar } from "../components/BottomNavbar";
import { TrainingPlan } from "../components/TrainingPlan";
import { ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { ProfileText } from "../components/ProfileText";
import { loadPlan } from "../store/actions/drillPlan";
import { THEME } from "../theme";

export const ExBase = ({ navigation }) => {
  const plans = useSelector((state) => state.drillPlan.allPlan);
  const isLoaded = useSelector((state) => state.drillPlan.isPlanLoaded);
  
  const dispatch = useDispatch()
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="New plan"
          onPress={() => navigation.navigate("AddNewPlan")}
        />
      ),
    });
    dispatch(loadPlan());
  }, [dispatch]);
  return (
    <>
      {isLoaded ? (
        <View style={styles.profile}>
          <ScrollView style={styles.scrollView}>
          {plans.map((plan) => {
          return (
            <>
            <TrainingPlan plan={plan} />
            <TrainingPlan plan={plan} />
            <TrainingPlan plan={plan} />
            <TrainingPlan plan={plan} />
            </>
          );
        })}
          </ScrollView>
          <View>
            <BottomNavbar navigation={navigation} />
          </View>
        </View>
      ) : (
        <>
          <View style={styles.activityIndecator}>
            <ActivityIndicator size={"large"} />
            <ProfileText value={"Loading..."} />
          </View>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  profile: {
    flex: 1,
  },
  scrollView: {},
  activityIndecator: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: THEME.BACKGROUND,
    width: "100%",
  },
});
