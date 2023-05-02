import React from "react";
import "./Offer.styles.scss";

const Offer = ({ offer }) => {
  const { title, headline, topicList } = offer;
  const topicListObj = topicList;
  let topicListArr = Object.values(topicListObj);
  return (
    <div className="offer">
      <h4 className="offer__title">{title}</h4>
      <p className="offer__headline">{headline}</p>
      <div className="offer__itemContainer">
        {topicListArr.map((item, index) => (
          <div key={index} className="offer__item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Offer;
