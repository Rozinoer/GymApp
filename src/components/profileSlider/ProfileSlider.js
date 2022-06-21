import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React, { useState } from "react";

import { styles } from "./styles";

export const ProfileSlider = ({
  setEvent,
  setStat,
  setPlan,
  event,
  stat,
  plan,
  user,
}) => {
  return (
    <View style={styles.slide}>
      <TouchableOpacity
        onPress={() => {
          setEvent(true);
          setStat(false);
          setPlan(false);
        }}
      >
        <Text style={event ? styles.active : styles.nonActive}>События</Text>
      </TouchableOpacity>
      {!user.isCoach ? (
        <>
          <TouchableOpacity
            onPress={() => {
              setEvent(false);
              setStat(true);
              setPlan(false);
            }}
          >
            <Text style={stat ? styles.active : styles.nonActive}>
              Статистика
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setEvent(false);
              setStat(false);
              setPlan(true);
            }}
          >
            <Text style={plan ? styles.active : styles.nonActive}>План</Text>
          </TouchableOpacity>
        </>
      ) : (
        <></>
      )}
    </View>
  );
};
