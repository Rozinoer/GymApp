const initialState = {
  planToSave: [],
  allPlan: [],
  isPlanLoaded: false,
};

export const drillPlanReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DAY":
      const day = action.day;
      const drills = action.drills;
      return {
        ...state,
        planToSave: [
          ...state.planToSave,
          {
            day,
            drills,
          },
        ],
      };
    case "LOAD_PLANS":
      
      return {
        ...state,
        allPlan: action.data,
        isPlanLoaded: true,
      };
    default:
      return state;
  }
};
