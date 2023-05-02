import React, { useEffect } from "react";
import { useIntersection } from "react-use";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./TeamContainer.styles.scss";
import TeamMember from "./teamMember/TeamMember.component";
import { setCurrentPosition } from "../../redux/position/position.actions";
import { selectTeamMember } from "../../redux/team/team.selectors";

const TeamContainer = ({ dispatch, currentTeamMember }) => {
  const sectionRef = React.useRef(null);
  const winHeight = window.innerHeight;
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: `0px 0px -${winHeight - 5}px 0px`,
  });
  useEffect(() => {
    if (intersection && intersection.isIntersecting) {
      dispatch(setCurrentPosition("fullwhitebar"));
    } else {
      dispatch(setCurrentPosition("whitebar"));
    }
  });
  return (
    <div className="teamContainer" ref={sectionRef}>
      <h1 className="teamContainer__header">Beyond’s leadership team</h1>
      <div className="teamContainer__members">
        {currentTeamMember.map(({ id, ...otherProps }) => (
          <TeamMember key={id} {...otherProps} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentTeamMember: selectTeamMember,
});
export default connect(mapStateToProps)(TeamContainer);
