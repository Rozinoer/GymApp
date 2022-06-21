const initialState = {
  event: false,
  plan: false,
};

export const testReducer = (state = initialState, action) => {
    console.log('test reducer')
    console.log(action.type)
  switch (action.type) {
    case "PLAN":
      return {
        ...state,
        plan: true,
      };
    case "EVENT":
      return {
        ...state,
        event: true,
      };
    default:
      return state;
  }
};
