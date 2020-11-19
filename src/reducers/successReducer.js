import { actionTypes } from "../actions";

const successReducer = (state = false, action) => {
  switch (action.type) {
    case actionTypes.CORRECT_GUESS:
      return true;
    default:
      return false;
  }
};

export default successReducer;
