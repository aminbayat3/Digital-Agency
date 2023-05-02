import React, { useEffect } from "react";
import { useIntersection } from "react-use";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectCurrentLocation } from "../../redux/location/location.selector";

import "./Banner.styles.scss";
import gsap from "gsap";
import { setCurrentPosition } from "../../redux/position/position.actions";
import { selectCurrentBannerText } from "../../redux/banner/banner.selectors";

const Banner = ({ currentLocation, dispatch, currentText }) => {
  const sectionRef = React.useRef(null);
  const bannerContent = React.useRef(null);
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.01,
  });
  useEffect(() => {
    if (intersection && intersection.intersectionRatio < 0.01) {
      if (currentLocation === "home") {
        dispatch(setCurrentPosition("blackbar"));
      } else {
        dispatch(setCurrentPosition("whitebar"));
      }
    } else {
      if (currentLocation === "home") {
        dispatch(setCurrentPosition("yellowbar"));
      } else {
        dispatch(setCurrentPosition("whitebar"));
      }
    }
  });
  useEffect(() => {
    gsap.fromTo(
      bannerContent.current,
      1.5,
      { x: -200, opacity: 0.4 },
      { x: 0, opacity: 1, ease: "power2.out" }
    );
  }, []);
  let mainHeader;

  switch (currentLocation) {
    case "home":
      mainHeader = currentText[0];
      break;
    case "whoweare":
      mainHeader = currentText[1];
      break;
    case "howwework":
      mainHeader = currentText[2];
      break;
    case "whatwehavedone":
      mainHeader = currentText[3];
      break;

    default:
      break;
  }
  return (
    <div className={`banner banner--${currentLocation}`} ref={sectionRef}>
      <div className="banner__content" ref={bannerContent}>
        <h1 className="banner__mainHeader">{mainHeader}</h1>
        <p
          className={`banner__officeLocations banner__officeLocations--${currentLocation}`}
        >
          London / New York / San Francisco
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentLocation: selectCurrentLocation,
  currentText: selectCurrentBannerText,
});

export default connect(mapStateToProps)(Banner);
