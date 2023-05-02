import React from "react";
import "./Office.styles.scss";

import { connect } from "react-redux";

const Office = ({ country, address, phone, currentLocation }) => {
  return (
    <div className="office">
      <div className={`office__country office__country--${currentLocation}`}>
        {country}
      </div>
      <div className={`office__address office__address--${currentLocation}`}>
        {address}
      </div>
      <div className={`office__phone office__phone--${currentLocation}`}>
        {phone}
      </div>
    </div>
  );
};

const mapStateToProps = ({ location: { currentLocation } }) => ({
  currentLocation
});
export default connect(mapStateToProps)(Office);
