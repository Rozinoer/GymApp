import { StyleSheet } from "react-native";

import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: THEME.BACKGROUND,
    height: 30,
    width: "45%",
    borderRadius: 40,
    borderColor: THEME.BACKGROUND_DATE,
    borderWidth: 1,
    padding: 5,
    margin: 2,
  },
  color: {
    color: THEME.HEADLINE_TEXT,
  },
});
