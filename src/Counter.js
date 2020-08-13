import React from "react";
import PropTypes from "prop-types";

const Counter = (props) => {
  return (
    <table className="counter">
      <tbody>
        <tr>
          <td>Attending:</td>
          <td>{props.totalConfirmed}</td>
        </tr>
        <tr>
          <td>Unconfirmed:</td>
          <td>{props.totalUnconfirmed}</td>
        </tr>
        <tr>
          <td>Total:</td>
          <td>{props.totalInvited}</td>
        </tr>
      </tbody>
    </table>
  );
};

Counter.propTypes = {
  totalConfirmed: PropTypes.number,
  totalUnconfirmed: PropTypes.number,
  totalInvited: PropTypes.number,
};

export default Counter;
