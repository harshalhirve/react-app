import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

const counterReducer = (state = initialState.count, action) => {
  let newState;

  switch (action.type) {
    case actionTypes.INCREMENT_COUNTER:
      return (newState = state + action.payload);
    case actionTypes.DECREMENT_COUNTER:
      return (newState = state - action.payload);
    default:
      return state;
  }
};

export default counterReducer;
