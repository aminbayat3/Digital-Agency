import React, { useEffect } from "react";

import { connect } from "react-redux";
import { setCurrentLocation } from "../../redux/location/location.actions";

import Banner from "../../components/banner/Banner.component";
import Clients from "../../components/clients/Clients.component";
import Footer from "../../components/footer/footer.component";
const WhatWeHaveDone = props => {
  useEffect(() => {
    props.setCurrentLocation("whatwehavedone");
  });
  return (
    <React.Fragment>
      <Banner />
      <Clients />
      <Footer />
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => ({
  setCurrentLocation: location => dispatch(setCurrentLocation(location))
});
export default connect(null, mapDispatchToProps)(WhatWeHaveDone);
