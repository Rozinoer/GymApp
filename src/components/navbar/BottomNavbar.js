import React from "react";
import { View, TouchableOpacity } from "react-native";
import { AntDesign, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { useSelector } from "react-redux";

import { THEME } from "../../theme";
import { loadPlans } from "../../db";
import { styles } from "./styles";

export const BottomNavbar = ({ navigation }) => {
  const isCoach = useSelector((state) => state.auth.isCoach);
  return (
    <View style={styles.navbar}>
      {isCoach == true ? (
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Clients")}
        >
          <Ionicons name="people" size={24} color={THEME.BACKGROUND} />
        </TouchableOpacity>
      ) : null}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ExBase")}
      >
        <FontAwesome5 name="dumbbell" size={24} color={THEME.BACKGROUND} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Profile")}
      >
        <Ionicons name="home" size={36} color={THEME.BACKGROUND} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={async () => {
          await loadPlans();
        }}
      >
        <FontAwesome5 name="carrot" size={24} color={THEME.BACKGROUND} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ChatScreen")}
      >
        <AntDesign name="wechat" size={24} color={THEME.BACKGROUND} />
      </TouchableOpacity>
    </View>
  );
};
