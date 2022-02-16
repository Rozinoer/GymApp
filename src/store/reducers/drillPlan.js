const initialState = {
  planToSave: [],
  allPlan: [],
};

export const drillPlanReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DAY":
      const day = action.day
      const drills = action.drills
      return {
        ...state,
        planToSave: [
          ...state.planToSave,
          {
            day,
            drills
          },
        ],
      };
    default:
      return initialState;
  }
};
