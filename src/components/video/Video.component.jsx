import React from "react";

import { connect } from "react-redux";

import { selectCurrentLocation } from "../../redux/location/location.selector";
import { createStructuredSelector } from "reselect";

import "./Video.styles.scss";

const Video = ({ currentLocation }) => {
  const videoSource = [
    "https://player.vimeo.com/external/384499623.hd.mp4?s=51a5379baddf11091d3c6fbc3bb6af47690a940d",
    "https://player.vimeo.com/external/390535396.hd.mp4?s=00c05151895031882a992e6b01538f7b6ab7ee58&profile_id=175",
    "https://player.vimeo.com/external/390536429.hd.mp4?s=9c280d07ee951b1dad824b0897ebbfa3043fe8c0&profile_id=169",
  ];

  //SOURCE OF THE VIDEO
  let source;
  switch (currentLocation) {
    case "home":
      source = videoSource[0];
      break;
    case "howwework":
      source = videoSource[1];
      break;
    case "whoweare":
      source = videoSource[2];
      break;

    default:
      break;
  }

  return (
    <div className="videoContainer">
      <video className="videoContainer__video" loop autoPlay muted>
        <source src={source} type="video/mp4" />
      </video>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentLocation: selectCurrentLocation,
});
export default connect(mapStateToProps)(Video);
