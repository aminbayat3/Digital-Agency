import React from "react";
import "./Value.styles.scss";

class Value extends React.Component {
  render() {
    const { id, header, explanation } = this.props.valueData;
    return (
      <div className="value" ref={this.props.references}>
        <h4 className="value__number">{id}</h4>
        <h3 className="value__header">{header}</h3>
        <p className="value__explanation">{explanation}</p>
      </div>
    );
  }
}
export default Value;
