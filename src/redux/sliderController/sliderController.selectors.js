import { createSelector } from "reselect";

const selectSlide = (state) => state.slide;

export const selectCurrentSlide = createSelector(
  [selectSlide],
  (slide) => slide.currentSlide
);
