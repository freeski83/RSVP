import React from "react";
import PropTypes from "prop-types";

const GuestName = (props) => {
  if (props.isEditing) {
    return (
      <input
        type="text"
        value={props.children}
        onChange={props.handleNameChange}
      />
    );
  }
  return <span>{props.children}</span>;
};

GuestName.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  handleNameChange: PropTypes.func.isRequired,
};

export default GuestName;
