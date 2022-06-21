import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
  },
  container: {
    flexDirection: "row",
    height: 44,
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "84%",
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: THEME.HEADLINE_TEXT,
    borderRadius: 20,
    
  },
  textInput: {
    fontSize: 16,
    height: 36,
    marginLeft: 10,
    marginRight: 10,
  },
});
