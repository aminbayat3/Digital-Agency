import React, { useEffect } from "react";

import { connect } from "react-redux";
import { setCurrentLocation } from "../../redux/location/location.actions";

import Banner from "../../components/banner/Banner.component";
import Video from "../../components/video/Video.component";
import Clients from "../../components/clients/Clients.component";
import MetaTags from "react-meta-tags";
import Footer from "../../components/footer/footer.component";

const Home = (props) => {
  useEffect(() => {
    props.setCurrentLocation("home");
  });
  return (
    <React.Fragment>
      <MetaTags>
        <title>Home page</title>
        <meta name="description" content="I created this as my portfolio." />
        <meta property="og:title" content="my portfolio app" />
        <meta property="og:image" content="../../assets/antibias.png" />
      </MetaTags>
      <Banner />
      <Video />
      <Clients />
      <Footer />
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentLocation: (location) => dispatch(setCurrentLocation(location)),
});
export default connect(null, mapDispatchToProps)(Home);
