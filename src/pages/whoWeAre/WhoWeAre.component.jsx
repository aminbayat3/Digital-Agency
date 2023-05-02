import React, { useEffect } from "react";

import { connect } from "react-redux";
import { setCurrentLocation } from "../../redux/location/location.actions";

import Banner from "../../components/banner/Banner.component";
import Video from "../../components/video/Video.component";
import Footer from "../../components/footer/footer.component";
import Description from "../../components/description/Description.component";
import TeamContainer from "../../components/teamContainer/TeamContainer.component";

const WhoWeAre = props => {
  useEffect(() => {
    props.setCurrentLocation("whoweare");
  });
  return (
    <React.Fragment>
      <Banner />
      <Video />
      <Description />
      <TeamContainer />
      <Footer />
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => ({
  setCurrentLocation: location => dispatch(setCurrentLocation(location))
});
export default connect(null, mapDispatchToProps)(WhoWeAre);
