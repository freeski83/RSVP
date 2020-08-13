import React from "react";
import PropTypes from "prop-types";

const Header = (props) => {
  return (
    <header>
      <h1>RSVP</h1>
      <form onSubmit={props.handleGuestNameSubmit}>
        <input
          type="text"
          value={props.pendingGuest}
          placeholder="Invite Someone"
          onChange={props.handleNameInput}
        />
        <button type="submit" name="submit" value="submit">
          Submit
        </button>
      </form>
    </header>
  );
};

Header.propTypes = {
  handleNameInput: PropTypes.func.isRequired,
  handleGuestNameSubmit: PropTypes.func.isRequired,
};

export default Header;
