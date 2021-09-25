import  { GET_ERRORS } from '../Actions/Types';

const initialState = {};

export default function f(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
}
