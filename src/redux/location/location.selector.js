import { createSelector } from "reselect";

const selectLocation = state => state.location;

export const selectCurrentLocation = createSelector(
  [selectLocation],
  location => location.currentLocation
);
