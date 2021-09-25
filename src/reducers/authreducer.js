import { SET_CURRENT_USER } from "../Actions/Types";
import isEmpty from "../Validation/isEmpty";

const intialState = {
  isAuthanticated: false,
  user: {},
};
export default function foo(state = intialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      console.log("isAuthanticated", intialState.isAuthanticated);
      return {
        ...state,
        isAuthanticated: !isEmpty(action.payload),
        user: action.payload,
      };
    default:
      return state;
  }
}
