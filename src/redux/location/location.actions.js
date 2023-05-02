import { locationActionTypes } from "./location.types";

export const setCurrentLocation = location => ({
  type: locationActionTypes.SET_CURRENT_PAGE,
  payload: location
});
