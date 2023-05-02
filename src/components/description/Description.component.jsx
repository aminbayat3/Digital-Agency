import React from "react";
import "./Description.styles.scss";
import UnderVideoPara from "./undervideoPara/UnderVideoPara.component";
import ValuesContainer from "./valuesContainer/ValuesContainer.component";

const Description = () => {
  return (
    <div className="description">
      <UnderVideoPara />
      <ValuesContainer />
    </div>
  );
};


export default Description;
