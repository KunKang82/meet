// src/__tests__/Event.test.js

import React from 'react';
import { shallow } from 'enzyme';
import { mockData } from '../mock-data';
import Event from '../Event';

describe('<Event /> component', () => {
  let event, EventWrapper;
  beforeAll(() => {
    event = mockData[0];
    EventWrapper = shallow(<Event event={event} />);
  });

  // test('render event title', () => {
  //   expect(EventWrapper.find('.event-title')).toHaveLength(1);
  // });

  // test('render event info', () => {
  //   expect(EventWrapper.find('.event-info')).toHaveLength(1);
  // });

  // test('event info renders correctly', () => {
  //   expect(EventWrapper.find('.event-info').text()).toContain(event.location);
  //   expect(EventWrapper.find('.event-info').text()).toContain(event.start.dateTime);
  //   expect(EventWrapper.find('.event-info').text()).toContain(event.start.timeZone);
  // });

  // test('render show details button', () => {
  //   expect(EventWrapper.find('.show_details-button')).toHaveLength(1);
  // });

  // test('render hide details button when description expanded', () => {
  //   EventWrapper.setState({
  //     show: true,
  //   });
  //   expect(EventWrapper.find('.hide_details-button')).toHaveLength(1);
  // });

  // test('if not interacted with,event info should be hidden', () => {
  //   EventWrapper = EventWrapper = shallow(<Event event={event} />);
  //   expect(EventWrapper.state('show')).toBe(false);
  // });

  // test('clicking show details button, expand description text', () => {
  //   EventWrapper.setState({
  //     show: false,
  //   });
  //   EventWrapper.find('.show_details-button').simulate('click');
  //   expect(EventWrapper.state('show')).toEqual(true);
  // });

  // test('render event description correctly after show button clicked', () => {
  //   EventWrapper.setState({
  //     show: true,
  //   });
  //   expect(EventWrapper.find('.event-description')).toHaveLength(1);
  // });

  // test('clicking hide details button, hide description text', () => {
  //   EventWrapper.setState({
  //     show: true,
  //   });
  //   EventWrapper.find('.hide_details-button').simulate('click');
  //   expect(EventWrapper.state('show')).toEqual(false);
  // });

  test("render event div", () => {
    expect(EventWrapper.find(".event")).toHaveLength(1);
  });

  test("render event information elements", () => {
    expect(EventWrapper.find(".event h2")).toHaveLength(1);
    expect(EventWrapper.find(".event p")).toHaveLength(2);
    expect(EventWrapper.find(".event button")).toHaveLength(1);
  });

  test("render correct event title", () => {
    expect(EventWrapper.find(".event h2").at(0).text()).toBe(event.summary);
  });

  test("render correct event time", () => {
    expect(EventWrapper.find(".event p").at(0).text()).toBe(new Date(event.start.dateTime).toString());
  });

  test("render correct event location", () => {
    expect(EventWrapper.find(".event p").at(1).text()).toBe(event.location);
  });

  test("render correct button text", () => {
    expect(EventWrapper.find(".event button").at(0).text()).toBe("show details");
  });

  test("change show details button text on click", () => {
    EventWrapper.find(".event button").at(0).simulate("click");
    expect(EventWrapper.find(".event button").at(0).text()).toBe("hide details");
    EventWrapper.find(".event button").at(0).simulate("click");
    expect(EventWrapper.find(".event button").at(0).text()).toBe("show details");
  });

  test("show details on click show details button", () => {
    EventWrapper.find(".event button").at(0).simulate("click");
    expect(EventWrapper.find(".event h3")).toHaveLength(1);
    expect(EventWrapper.find(".event a")).toHaveLength(1);
    expect(EventWrapper.find(".event p")).toHaveLength(3);
    expect(EventWrapper.find(".event h3").at(0).text()).toBe("About Event:");
    expect(EventWrapper.find(".event a").at(0).text()).toBe("See details on Google Calendar");
    expect(EventWrapper.find(".event a").at(0).prop("href")).toBe(event.htmlLink);
    expect(EventWrapper.find(".event p").at(2).text()).toBe(event.description);
    EventWrapper.find(".event button").at(0).simulate("click");
  });

  test("hide details", () => {
    EventWrapper.find(".event button").at(0).simulate("click");
    EventWrapper.find(".event button").at(0).simulate("click");
    expect(EventWrapper.find(".event h3").exists()).toBeFalsy();
    expect(EventWrapper.find(".event a").exists()).toBeFalsy();
    expect(EventWrapper.find(".event p").at(2).exists()).toBeFalsy();
  })
});