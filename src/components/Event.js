import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { THEME } from "../theme";

export const Event = ({ date, month, user, time, duration, type }) => {
  return (
    <View style={styles.eventBlock}>
      <View style={styles.eventDate}>
        <Text style={{ fontSize: 28 }}>{date}</Text>
        <Text>{month}</Text>
      </View>
      <View style={styles.eventDiscription}>
        <View style={styles.eventTitle}>
          <Text
            style={{
              color: THEME.BACKGROUND_DATE,
              marginRight: 10,
              fontWeight: "bold",
            }}
          >
            Event
          </Text>
          <Text>{type}</Text>
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", height: "33%" }}
        >
          <Text style={{ color: THEME.BACKGROUND_DATE }}>{user}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            height: "33%",
            width: "100%",
          }}
        >
          <Text style={{ color: THEME.BACKGROUND_DATE }}>At {time} PM</Text>
          <Text style={{ marginLeft: 10, color: THEME.BACKGROUND_DATE }}>
            for about {duration} Hour
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  eventBlock: {
    flexDirection: "row",
    width: "100%",
    height: 70,
    borderColor: THEME.PARAGRAPH,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  eventDate: {
    height: 68,
    backgroundColor: THEME.BACKGROUND_DATE,
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  eventTitle: {
    flexDirection: "row",
    width: "100%",
    height: "33%",
    alignItems: "center",
  },
  eventDiscription: {
    paddingLeft: 10,
    width: "80%",
  },
});
