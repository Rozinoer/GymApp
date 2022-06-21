import { StyleSheet } from "react-native";
import { THEME } from '../../theme'

export const styles = StyleSheet.create({
  name: {
    borderBottomWidth: 0.2,
    borderTopWidth: 0.2,
    borderColor: THEME.PARAGRAPH,
    height: "100%",
    flex: 1,
    justifyContent: "center",
    marginLeft: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    backgroundColor: THEME.PARAGRAPH,
    borderRadius: 45,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 32,
    color: THEME.HEADLINE_TEXT,
  },
  infoBlock: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: THEME.BACKGROUND,
    height: 70,
  },
});
