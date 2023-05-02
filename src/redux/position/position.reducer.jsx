import { positionActionTypes } from "./position.types";
const INITIAL_STATE = {
  currentPosition: "yellowbar"
};

const positionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case positionActionTypes.SET_CURRENT_POSITION:
      return {
        ...state,
        currentPosition: action.payload
      };

    default:
      return state;
  }
};
export default positionReducer;
