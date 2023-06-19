// // src/NumberOfEvent.js

import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    errorText: ""
    // numberOfEvents: this.props.numberOfEvents
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    if ( value <= 32 && value >0 ) {
      this.setState({
        numberOfEvents: value,
        errorText: ""
      });
      this.props.updateEvents(undefined, value);
    } else {
      this.setState({
        numberOfEvents: value,
        errorText: "Please select number from 1 to 32"
      });
    }
    // this.setState({
    //   numberOfEvents: value
    // });
    // this.props.updateEvents(undefined, value)
  }

  render() {
    return (
      <div className="numberOfEvents">
        <label htmlFor="eventCount">Number of Events:</label>
        <input
          type="number"
          id="eventCount"
          className="eventNumberInput"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
          />
          <ErrorAlert text={this.state.errorText} />
      </div>
      
    );
  }
}
export default NumberOfEvents;