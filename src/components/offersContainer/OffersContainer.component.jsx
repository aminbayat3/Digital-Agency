import React from "react";
import "./OffersContainer.styles.scss";
import UnderVideoPara from "../description/undervideoPara/UnderVideoPara.component";
import Offer from "./offer/Offer.component";
import { selectOffer } from "../../redux/offers/offers.selectors";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const OffersContainer = ({ offerData }) => {
  return (
    <div className="offersContainer">
      <UnderVideoPara />
      <div className="offersContainer__offers">
        {offerData.map((offer) => {
          return <Offer key={offer.id} offer={offer} />;
        })}
      </div>
    </div>
  );
};

const mapDispatchToProps = createStructuredSelector({
  offerData: selectOffer,
});
export default connect(mapDispatchToProps)(OffersContainer);
