import React, { useRef, useEffect } from "react";
import "./ValuesContainer.styles.scss";
import Value from "./value/Value.component";

import { connect } from "react-redux";

import { selectValue } from "../../../redux/values/values.selector";
import { selectCurrentSlide } from "../../../redux/sliderController/sliderController.selectors";

import { createStructuredSelector } from "reselect";
import SliderController from "./sliderController/SliderController.component";

import gsap from "gsap";

const ValuesContainer = ({ values, currentSlide }) => {
  let reactRefs = [];
  values.forEach((_, index) => {
    reactRefs[index] = React.createRef();
  });
  let refs = useRef(reactRefs);
  const valuesRef = useRef(null);
  useEffect(() => {
    gsap.to(valuesRef.current, 1, { left: `${currentSlide * -100}vw`, ease: "power2.out" });
  });

  return (
    <div className="valuesContainer">
      <h2 className="valuesContainer__header">Beyond’s values</h2>
      <div className="valuesContainer__valuesWrapper">
        <div className="valuesContainer__values" ref={valuesRef}>
          {values.map((valueData, index) => (
            <Value
              key={valueData.id}
              valueData={valueData}
              references={refs.current[index]}
            />
          ))}
        </div>
        <SliderController />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  values: selectValue,
  currentSlide: selectCurrentSlide,
});

export default connect(mapStateToProps)(ValuesContainer);
