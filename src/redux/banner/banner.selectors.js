import { createSelector } from "reselect";

const selectBanner = state => state.banner;

export const selectCurrentBannerText = createSelector(
  [selectBanner],
  banner => banner.currentText
);
