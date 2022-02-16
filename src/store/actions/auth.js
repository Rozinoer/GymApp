import {
  logup,
  logout,
  login,
  auth,
  setUserData,
  getSelfInfo,
  getUserData,
} from "../../firebase";

export const signIn = (username, password) => async (dispatch) => {
  await login(username, password);
  // const user = await getUserData();
  dispatch({
    type: "SIGN_IN",
    token: "token",
    // user: user,
  });
};

export const signUp = (selfInfo) => async (dispatch) => {
  await logup(selfInfo.email, selfInfo.password);
  await setUserData(selfInfo);
  dispatch({
    type: "SIGN_UP",
    token: "token",
  });
};

export const signOut = () => {
  logout();
  return (dispatch) => {
    dispatch({
      type: "SIGN_OUT",
    });
  };
};

export const restoreToken = () => {
  // обратиться к серверу
  return (dispatch) => {
    dispatch({
      type: "RESTORE_TOKEN",
      token: "token",
    });
  };
};

export const loadUserData = () => async (dispatch) => {
  const user = await getUserData();
  dispatch({
    type: "loadUserData",
    user: user,
  });
};
