import { addNewPlan, loadPlans } from "../../db";

export const addDay = (title, drill) => {
  return (dispatch) => {
    dispatch({
      type: "ADD_DAY",
      day: title,
      drills: drill,
    });
  };
};

export const addPlan = (plan, title, discription) => {
  return async (dispatch) => {
    await addNewPlan(plan, title, discription);
    dispatch({
      type: "SAVE_PLAN",
    });
  };
};

export const loadPlan = () => async (dispatch) => {
  const plan = await loadPlans();
  dispatch({
    type: "LOAD_PLANS",
    data: plan,
  });
};
