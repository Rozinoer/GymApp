import { StyleSheet } from "react-native";

import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  navbar: {
    height: 100,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: 'flex-start',
    paddingTop:10,
    backgroundColor: THEME.BACKGROUND,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "white",
  },
});
