// src/App.js

import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import './nprogress.css';
import { WarningAlert } from './Alert';
import WelcomeScreen from './WelcomeScreen';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    selectedLocation: "all",
    showWelcomeScreen: undefined
  }

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false :
      true;
    const searchParams = new URLSearchParams(window.location.search);

    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ events: events.slice(0, this.state.numberOfEvents), locations: extractLocations(events) });
          //this.setState({ events, locations: extractLocations(events) });
        }
      });
    }
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
    if (this.state.showWelcomeScreen === undefined) return <div
      className="App" />

    return (
      <div className="App">
        <h1>Meet App</h1>
        {!navigator.onLine ? <WarningAlert text={"You are offline, the displayed list has been loaded from the cache. Please aware it may not be up to date"} /> : null}
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEvents={this.updateEvents}/>
        <EventList events={this.state.events} />
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />
      </div>
    );
  }
}

export default App;