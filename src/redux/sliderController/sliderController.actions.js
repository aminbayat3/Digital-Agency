import { sliderControllerActionTypes } from "./sliderController.types";

export const nextSlide = () => ({
  type: sliderControllerActionTypes.NEXT_SLIDE,
});

export const previousSlide = () => ({
  type: sliderControllerActionTypes.PREVIOUS_SLIDE,
});
