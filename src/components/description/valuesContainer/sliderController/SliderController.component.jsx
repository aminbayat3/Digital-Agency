import React, { useEffect, useRef } from "react";
import "./SliderController.styles.scss";
import { ReactComponent as LeftArrow } from "../../../../assets/leftArrow.svg";
import { ReactComponent as RightArrow } from "../../../../assets/rightArrow.svg";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  nextSlide,
  previousSlide,
} from "../../../../redux/sliderController/sliderController.actions";
import { selectCurrentSlide } from "../../../../redux/sliderController/sliderController.selectors";

const SliderController = ({ nextSlide, previousSlide, currentSlide }) => {
  let reactRefs = [];
  for (let i = 0; i < 7; i++) {
    reactRefs[i] = React.createRef();
  }
  let refs = useRef(reactRefs);
  const rightArrowWrapper = useRef(null);
  const rightArrow = useRef(null);

  const leftArrowWrapper = useRef(null);
  const leftArrow = useRef(null);
  useEffect(() => {
    refs.current.forEach((_, index) => {
      if (currentSlide === index) {
        switch (currentSlide) {
          case 0:
            refs.current[index].current.style.background = "#1a1a1a";
            leftArrowWrapper.current.style.background = "#dbdbdb";
            leftArrow.current.style.fill = "#dbdbdb";
            break;
          case 6:
            refs.current[index].current.style.background = "#1a1a1a";
            rightArrowWrapper.current.style.background = "#dbdbdb";
            rightArrow.current.style.fill = "#dbdbdb";
            break;

          default:
            refs.current[index].current.style.background = "#1a1a1a";
            rightArrowWrapper.current.style.background = "#1a1a1a";
            leftArrowWrapper.current.style.background = "#1a1a1a";
            rightArrow.current.style.fill = "#1a1a1a";
            leftArrow.current.style.fill = "#1a1a1a";
            break;
        }
      } else {
        refs.current[index].current.style.background = "#dbdbdb";
      }
    });
  });
  return (
    <div className="arrows">
      <div
        className="arrows__wrapper arrows__wrapper--previous"
        onClick={previousSlide}
        ref={leftArrowWrapper}
      >
        <LeftArrow
          className="arrows__arrow arrows__arrow--previous"
          ref={leftArrow}
        />
      </div>
      <span className="valueTracker" ref={refs.current[0]}></span>
      <span className="valueTracker" ref={refs.current[1]}></span>
      <span className="valueTracker" ref={refs.current[2]}></span>
      <span className="valueTracker" ref={refs.current[3]}></span>
      <span className="valueTracker" ref={refs.current[4]}></span>
      <span className="valueTracker" ref={refs.current[5]}></span>
      <span className="valueTracker" ref={refs.current[6]}></span>
      <div
        className="arrows__wrapper arrows__wrapper--next"
        ref={rightArrowWrapper}
        onClick={nextSlide}
      >
        <RightArrow
          className="arrows__arrow arrows__arrow--next"
          ref={rightArrow}
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  nextSlide: () => dispatch(nextSlide()),
  previousSlide: () => dispatch(previousSlide()),
});
const mapStateToProps = createStructuredSelector({
  currentSlide: selectCurrentSlide,
});
export default connect(mapStateToProps, mapDispatchToProps)(SliderController);
