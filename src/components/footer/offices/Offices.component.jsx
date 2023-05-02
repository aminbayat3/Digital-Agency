import React from "react";
import "./Offices.styles.scss";
import OFFICES_DATA from "./offices.data";
import Office from "./office/Office.component";

const Offices = () => {
  const officesData = OFFICES_DATA;
  return (
    <div className="offices">
      {officesData.map(({ id, ...otherProps }) => (
        <Office key={id} {...otherProps} />
      ))}
    </div>
  );
};
export default Offices;
