
import { getDialogs, getUser, getDialog, setMessage } from "../../db";

export const loadChats = () => async (dispatch) => {
  let chats = [];
  const dialogs = await getDialogs();
  for (const key in dialogs) {
    const user = { ...(await getUser(key)), messageRef: dialogs[key] };
    chats = [...chats, user];
  }
  dispatch({
    type: "LOAD_CHATS",
    data: chats,
  });
};

export const sendMessage = (text, messageRef, sender) => (dispatch) => {
  setMessage(text, messageRef);
  dispatch({
    type: "SEND_MESSAGE",
    message: {
      text,
      sender,
      key: Date.now(),
    },
  });
};

export const loadDialog = (userId, messageRef) => async (dispatch) => {
  let messagesArr = await getDialog(messageRef);
  dispatch({
    type: "LOAD_DIALOG",
    chatHistory: messagesArr,
  });
};
