import { StyleSheet } from "react-native";

import { THEME} from '../../theme'

export const styles = StyleSheet.create({
  slide: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: THEME.BACKGROUND,
    height: 30,
  },
  active: {
    color: THEME.HEADLINE_TEXT,
    fontFamily: "Montserrat",
    fontWeight: "bold",
  },
  nonActive: {
    color: THEME.PARAGRAPH,
    fontFamily: "Montserrat",
    fontWeight: "normal",
  },
});
