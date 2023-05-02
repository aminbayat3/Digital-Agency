import React from "react";
import "./Client.styles.scss";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectCurrentLocation } from "../../../redux/location/location.selector";

const Client = ({ client, currentLocation }) => {
  const { imageUrl, title, para, size } = client;
  return (
    <div className={`client client--${size}`}>
      <div
        className={`client__backgroundImageWrapper client__backgroundImageWrapper--${size}`}
      >
        <div
          className={`client__image`}
          style={{
            backgroundImage: `url(${imageUrl})`
          }}
        />
      </div>
      <h4 className={`client__header client__header--${currentLocation}`}>
        {title}
      </h4>
      <p className="client__para">{para}</p>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentLocation: selectCurrentLocation
});
export default connect(mapStateToProps)(Client);
