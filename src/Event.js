// // src/Event.js

import React, { Component } from 'react';

// class Event extends Component {
//   eventDetailsToggler = () => {
//     this.setState({ show: !this.state.show });
//   };

//   state = { show: false };

//   render() {
//     const { event } = this.props;
//     return (
//       <div className="event">
//         <h5 className="event-title">{event.summary}</h5>
//         <p className="event-info">
//           {event.location} {event.start.dateTime} {event.start.timeZone}
//         </p>
//         {this.state.show && (
//           <p className="event-description">{event.description}</p>
//         )}
//         {!this.state.show ? (
//           <button
//             className="show_details-button"
//             onClick={this.eventDetailsToggler}
//           >
//             Show Details
//           </button>
//         ) : (
//           <button
//             className="hide_details-button"
//             onClick={this.eventDetailsToggler}
//           >
//             Hide Details
//           </button>
//         )}
//       </div>
//     );
//   }
// }

class Event extends Component {

  state = {
      details: false
  }

  render() {
      const { event } = this.props;

      return (
          <div className="event">
              <h2>{event.summary}</h2>
              <p>{new Date(event.start.dateTime).toString()}</p>
              <p>{event.location}</p>
              {!this.state.details ?
                  <button className="details-btn" onClick={() => this.setState({ details: true })}>show details</button>
                  : <div className="event__Details">
                      <h3>About Event:</h3>
                      <a href={event.htmlLink}>See details on Google Calendar</a>
                      <p>{event.description}</p>
                      <button className="details-btn" onClick={() => this.setState({ details: false })}>hide details</button>
                  </div>
              }
          </div>
      )
  };
}

export default Event;