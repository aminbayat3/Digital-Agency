import { positionActionTypes } from "./position.types";
export const setCurrentPosition = position => ({
  type: positionActionTypes.SET_CURRENT_POSITION,
  payload: position
});
