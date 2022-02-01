export const signIn = () => {
  // обратиться к серверу
  return  dispatch => {
      dispatch({
          type: 'SIGN_IN',
          token: 'token'
      })
  }
}