import React, { useEffect } from "react";
import "./ClientsIconsContainer.styles.scss";
import { useIntersection } from "react-use";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectClientIcons } from "../../redux/clientIcons/clientIcons.selectors";

import ClientIcon from "./clientIcon/ClientIcon.component";
import { setCurrentPosition } from "../../redux/position/position.actions";

const ClientsIconsContainer = ({ dispatch, clientIcons }) => {
  const sectionRef = React.useRef(null);
  const winHeight = window.innerHeight;
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: `0px 0px -${winHeight}px 0px`
  });
  useEffect(() => {
    if (intersection && intersection.isIntersecting) {
      dispatch(setCurrentPosition("fullwhitebar"));
    } else {
      dispatch(setCurrentPosition("whitebar"));
    }
  });
  return (
    <div className="clientsIconsContainer" ref={sectionRef}>
      <h2 className="clientsIconsContainer__header">Beyond works with</h2>
      <div className="clientsIconsContainer__clients">
        {clientIcons.map((icon, index) => (
          <ClientIcon key={index} icon={icon} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  clientIcons: selectClientIcons
});
export default connect(mapStateToProps)(ClientsIconsContainer);
