import React from "react";
import "./ClientIcon.styles.scss";

const ClientIcon = ({ icon }) => {
  return (
    <div className="clientIcon">
      <img className="clientIcon__image" src={icon} alt="client Icon" />
    </div>
  );
};

export default ClientIcon;
