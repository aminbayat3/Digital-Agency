import { createSelector } from "reselect";

const selectPosition = state => state.position;
export const selectCurrentPosition = createSelector(
  [selectPosition],
  position => position.currentPosition
);
