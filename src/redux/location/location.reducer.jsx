import { locationActionTypes } from "./location.types";
const INITIAL_STATE = {
  currentLocation: "home"
};
const locationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case locationActionTypes.SET_CURRENT_PAGE:
      return {
        ...state,
        currentLocation: action.payload
      };

    default:
      return state;
  }
};
export default locationReducer;
