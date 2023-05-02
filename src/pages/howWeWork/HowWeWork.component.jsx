import React, { useEffect } from "react";

import { connect } from "react-redux";
import { setCurrentLocation } from "../../redux/location/location.actions";

import Banner from "../../components/banner/Banner.component";
import Video from "../../components/video/Video.component";
import Footer from "../../components/footer/footer.component";
import OffersContainer from "../../components/offersContainer/OffersContainer.component";
import ClientsIconsContainer from "../../components/clientsIconsContainer/ClientsIconsContainer.component";

const HowWeWork = props => {
  useEffect(() => {
    props.setCurrentLocation("howwework");
  });
  return (
    <React.Fragment>
      <Banner />
      <Video />
      <OffersContainer />
      <ClientsIconsContainer />
      <Footer />
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => ({
  setCurrentLocation: loacation => dispatch(setCurrentLocation(loacation))
});
export default connect(null, mapDispatchToProps)(HowWeWork);
