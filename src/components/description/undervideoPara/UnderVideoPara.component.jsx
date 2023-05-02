import React from "react";
import "./UnderVideoPara.styles.scss";

import { selectCurrentLocation } from "../../../redux/location/location.selector";
import { createStructuredSelector } from "reselect";

import { connect } from "react-redux";

const UnderVideoPara = ({ currentLocation }) => {
  const UNDER_VIDEO_DATA = [
    "Beyond was founded in 2010 to help clients navigate the pace of technological change, allowing them to interact with their customers in more meaningful ways. We continue to tackle these types of challenges for our clients through our studios in London, New York and San Francisco. We're proud of the award-winning work we've produced for a wide range of forward thinking clients - and of the culture we've created at Beyond that enables all of our teams to do the best work of their lives.",
    "Beyond can help you throughout your digital journey. We partner with marketing, product and board level leaders to help you understand your customers better - and then build the right products and experiences to serve them. We work with you to define your product vision, design a strategy and improve your business outcomes.",
  ];
  let para, header;
  switch (currentLocation) {
    case "whoweare":
      para = UNDER_VIDEO_DATA[0];
      header = "";
      break;
    case "howwework":
      para = UNDER_VIDEO_DATA[1];
      header = "How we work";
      break;

    default:
      break;
  }
  return (
    <div className="underVideoPara">
      <h2 className="underVideoPara__header">{header}</h2>
      <p className="underVideoPara__para">{para}</p>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentLocation: selectCurrentLocation,
});
export default connect(mapStateToProps)(UnderVideoPara);
