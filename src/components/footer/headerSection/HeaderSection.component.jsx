import React from "react";
import "./HeaderSection.styles.scss";

import { selectCurrentLocation } from "../../../redux/location/location.selector";
import { createStructuredSelector } from "reselect";

import { connect } from "react-redux";

const HeaderSection = ({ currentLocation }) => {
  return (
    <div className="headerSection">
      <h2
        className={`headerSection__title headerSection__title--${currentLocation}`}
      >
        Ready to work together?
      </h2>
      <p
        className={`headerSection__subtitle headerSection__subtitle--${currentLocation}`}
      >
        Get in touch
      </p>
      <button
        className={`headerSection__mail headerSection__mail--${currentLocation}`}
      >
        business@bynd.com
      </button>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentLocation: selectCurrentLocation
});
export default connect(mapStateToProps)(HeaderSection);
