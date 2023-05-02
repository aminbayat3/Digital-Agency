import { createSelector } from "reselect";

const selectValues = state => state.value;

export const selectValue = createSelector(
  [selectValues],
  value => value.values
);
