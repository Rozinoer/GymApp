import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  info: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME.BACKGROUND,
    maxHeight: "40%",
    paddingTop: 40,
  },
  userInfo: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: 250,
  },
  actions: {
    marginTop: 20,
    flexDirection: "row",
  },
  selfDisc: {
    alignItems: "center",
    marginTop: 30,
    width: 300,
  },
  btn: {
    padding: 10,
    borderRadius: 10,
    margin: 5,
    marginTop: 15,
    alignItems: "center",
    backgroundColor: THEME.BUTTON,
  },
  clientInfoTextDisc: {
    color: THEME.HEADLINE_TEXT,
    fontSize: 12,
    fontFamily: "Montserrat",
  },
  centeredView: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: "100%",
    backgroundColor: THEME.BACKGROUND,
    borderColor: THEME.BACKGROUND_DATE,
    borderWidth: 3,
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  TextInput: {
    color: THEME.HEADLINE_TEXT,
    fontFamily: "Montserrat",
    fontSize: 16,
    borderBottomColor: THEME.PARAGRAPH,
    borderWidth: 0.2,
    height: 50,
    width: 100,
  },
});
