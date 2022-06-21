const initialState = {
  chats: [],
  isLoading: true,
  chatHistory: [],
  chatIsLoading: false
};

export const chatsReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "LOAD_CHATS":
      return {
        ...prevState,
        chats: action.data,
        isLoading: false,
      };
    case "LOAD_DIALOG":
      return {
        ...prevState,
        chatsHistory: action.chatHistory,
        chatIsLoading: true
      };
    case "SEND_MESSAGE":
      return {
        ...prevState,
        chatsHistory: [...prevState.chatsHistory, action.message]
      };
    default:
      return prevState;
  }
};
