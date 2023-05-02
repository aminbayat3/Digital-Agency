import { sliderControllerActionTypes } from "./sliderController.types";
import { setNextSlide, setPreviousSlide } from "./cart.utils";

const INITIAL_STATE = {
  currentSlide: 0,
};

const sliderControllerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case sliderControllerActionTypes.NEXT_SLIDE:
      return {
        ...state,
        currentSlide: setNextSlide(state.currentSlide),
      };
    case sliderControllerActionTypes.PREVIOUS_SLIDE:
      return {
        ...state,
        currentSlide: setPreviousSlide(state.currentSlide),
      };
    default:
      return state;
  }
};

export default sliderControllerReducer;
