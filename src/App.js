// src/App.js

import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import './nprogress.css';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    selectedLocation: "all"
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events: events.slice(0, this.state.numberOfEvents),  locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  updateNumberOfEvents(number) {
    this.setState({
      numberOfEvents: number,
    });
  }

  // updateEvents = (location, eventCount) => {
  //   if (eventCount === undefined) {
  //     eventCount = this.state.numberOfEvents;
  //   }
  //   getEvents().then((events) => {
  //     const locationEvents = location === "all" ?
  //       events :
  //       events.filter((event) => event.location === location);
  //     this.setState({
  //       events: locationEvents.slice(0, eventCount),
  //       numberOfEvents: eventCount
  //     });
  //   });
  // }
  updateEvents = (
    location = this.state.selectedLocation,
    eventCount = this.state.numberOfEvents
  ) => {
    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents.slice(0, eventCount),
        numberOfEvents: eventCount,
      });
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Meet App</h1>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEvents={this.updateEvents}/>
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;