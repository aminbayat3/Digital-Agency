import { createSelector } from "reselect";

const selectIcons = state => state.icons;

export const selectClientIcons = createSelector(
  [selectIcons],
  icons => icons.clientIcons
);
