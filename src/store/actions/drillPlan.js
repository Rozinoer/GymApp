import { addNewPlan } from "../../firebase";

export const addDay = (data) => {
  return (dispatch) => {
    dispatch({
      type: "ADD_DAY",
      day: data.title,
      drills: data.drill,
    });
  };
};

export const addPlan = ({plan, title, discription}) => {
  return async dispatch => {
    await addNewPlan(plan, title, discription)
    dispatch({
      type: "SAVE_PLAN",
    });
  };
};
