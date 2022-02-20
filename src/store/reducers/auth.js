const initialState = {
  isLoading: true,
  isSignout: false,
  userToken: null,
  user: null,
  isCoach: false
};

export const authReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "RESTORE_TOKEN":
      return {
        ...prevState,
        userToken: action.token,
        isLoading: false,
      };
    case "SIGN_IN":
      return {
        ...prevState,
        isSignout: false,
        userToken: action.token,
        user: action.user,
      };
    case "SIGN_UP":
      return {
        ...prevState,
        isSignout: false,
        userToken: action.token,
        user: action.user,
      };
    case "SIGN_OUT":
      return {
        ...prevState,
        isSignout: true,
        userToken: null,
      };
    case "loadUserData":
      return {
        ...prevState,
        user: action.user,
        isCoach: action.isCoach
      };
    default:
      return prevState;
  }
};
