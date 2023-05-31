// // src/NumberOfEvent.js

import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32
    // numberOfEvents: this.props.numberOfEvents
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({
      numberOfEvents: value
    });
  }

  render() {
    return (
      <div className="NumberOfEvents">
        {/* <label for="number">Number of Events:</label> */}
        <label htmlFor="number">Number of Events:</label>
        <input
          type="number"
          className="number"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
          />
      </div>
    );
  }
}
export default NumberOfEvents;