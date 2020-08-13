import React, { Component } from "react";
import GuestList from "./GuestList";
import Counter from "./Counter";

class App extends Component {
  state = {
    pendingGuest: "",
    isFiltered: false,
    guests: [
      {
        name: "Treasure",
        isConfirmed: false,
        isEditing: false,
      },
      {
        name: "Nick",
        isConfirmed: true,
        isEditing: false,
      },
      {
        name: "Sam",
        isConfirmed: false,
        isEditing: false,
      },
    ],
  };

  togglePropertyAt = (property, indexToChange) =>
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,
            [property]: !guest[property],
          };
        }
        return guest;
      }),
    });

  setNameAt = (name, indexToChange) =>
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,
            name,
          };
        }
        return guest;
      }),
    });

  inputGuestName = (e) =>
    this.setState({
      pendingGuest: e.target.value,
    });

  guestNameSubmit = (e) => {
    e.preventDefault();
    this.setState({
      guests: [
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false,
        },
        ...this.state.guests,
      ],
      pendingGuest: "",
    });
  };

  toggleConfirmationAt = (index) => this.togglePropertyAt("isConfirmed", index);
  toggleEditingAt = (index) => this.togglePropertyAt("isEditing", index);
  toggleFilter = () =>
    this.setState({
      isFiltered: !this.state.isFiltered,
    });

  removeGuestAt = (index) =>
    this.setState({
      guests: [
        ...this.state.guests.slice(0, index),
        ...this.state.guests.slice(index + 1),
      ],
    });

  getTotalInvited = () => this.state.guests.length;
  getTotalConfirmed = () =>
    this.state.guests.reduce(
      (total, guest) => (guest.isConfirmed ? total + 1 : total),
      0
    );

  render() {
    const totalConfirmed = this.getTotalConfirmed();
    const totalInvited = this.getTotalInvited();
    const totalUnconfirmed = totalInvited - totalConfirmed;
    return (
      <div className="App">
        <header>
          <h1>RSVP</h1>
          <form onSubmit={this.guestNameSubmit}>
            <input
              type="text"
              value={this.state.pendingGuest}
              placeholder="Invite Someone"
              onChange={this.inputGuestName}
            />
            <button type="submit" name="submit" value="submit">
              Submit
            </button>
          </form>
        </header>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input
                type="checkbox"
                onChange={this.toggleFilter}
                checked={this.state.isFiltered}
              />{" "}
              Hide those who haven't responded
            </label>
          </div>
          <Counter
            totalInvited={totalInvited}
            totalConfirmed={totalConfirmed}
            totalUnconfirmed={totalUnconfirmed}
          />
          <GuestList
            guests={this.state.guests}
            toggleConfirmationAt={this.toggleConfirmationAt}
            toggleEditingAt={this.toggleEditingAt}
            setNameAt={this.setNameAt}
            isFiltered={this.state.isFiltered}
            removeGuestAt={this.removeGuestAt}
            pendingGuest={this.state.pendingGuest}
          />
        </div>
      </div>
    );
  }
}

export default App;
