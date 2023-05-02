import React, { useEffect } from "react";
import "./Clients.styles.scss";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectCurrentLocation } from "../../redux/location/location.selector";

import Client from "./client/Client.component";
import HOME_PAGE_CLIENT_DATA from "./homeClient.data";
import WHAT_WE_HAVE_DONE_DATA from "./whatWeHaveDoneClient.data";
import { Link } from "react-router-dom";
import gsap from "gsap";

const Clients = ({ currentLocation }) => {
  let clientdata;
  switch (currentLocation) {
    case "home":
      clientdata = HOME_PAGE_CLIENT_DATA;
      break;
    case "whatwehavedone":
      clientdata = WHAT_WE_HAVE_DONE_DATA;
      break;
    default:
      clientdata = HOME_PAGE_CLIENT_DATA;
      break;
  }
  useEffect(() => {
    gsap.fromTo(
      ".clientsContainer",
      1.5,
      { y: 200 },
      { y: 0, ease: "power2.out" }
    );
  });

  return (
    <div className={`clientsContainer clientsContainer--${currentLocation}`}>
      <h2 className="clientsContainer__header">Featured work</h2>
      {clientdata.map(client => (
        <Client key={client.id} client={client} />
      ))}
      <div
        className={`clientsContainer__allClients clientsContainer__allClients--${currentLocation}`}
      >
        <Link className="clientsContainer__allClientsLink" to="/whatWeHaveDone">
          View all work
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentLocation: selectCurrentLocation
});
export default connect(mapStateToProps)(Clients);
