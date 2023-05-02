import React from "react";
import { ReactComponent as Arrow } from "../../assets/arrowUp.svg";
import "./footer.styles.scss";

import { selectCurrentLocation } from "../../redux/location/location.selector";
import { createStructuredSelector } from "reselect";

import { connect } from "react-redux";

import HeaderSection from "./headerSection/HeaderSection.component";
import Offices from "./offices/Offices.component";

const Footer = ({ currentLocation }) => {
  return (
    <div className={`footer footer--${currentLocation}`}>
      <div className={`footer__arrowUp footer__arrowUp--${currentLocation}`}>
        <Arrow />
      </div>
      <div className="footer__footerContent">
        <HeaderSection />
        <Offices />
      </div>
      <div className="footerExtra">
        <a
          href="https://www.linkedin.com/company/beyond_6/"
          className={`footerExtra__socialLink footerExtra__socialLink--${currentLocation}`}
        >
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/bynd/"
          className={`footerExtra__socialLink footerExtra__socialLink--${currentLocation}`}
        >
          Instagram
        </a>
        <a
          href="https://www.facebook.com/BYNDdigital/"
          className={`footerExtra__socialLink footerExtra__socialLink--${currentLocation}`}
        >
          Facebook
        </a>
        <a
          href="https://twitter.com/beyond"
          className={`footerExtra__socialLink footerExtra__socialLink--${currentLocation}`}
        >
          Twitter
        </a>
        <a
          href="https://medium.com/beyond"
          className={`footerExtra__socialLink footerExtra__socialLink--${currentLocation}`}
        >
          Medium
        </a>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentLocation: selectCurrentLocation
});
export default connect(mapStateToProps)(Footer);
