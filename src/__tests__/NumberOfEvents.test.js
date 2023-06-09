// src/__tests__/NumberOfEvents.test.js

import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => { }} />);
  });

  /* tests if NumberOfEvents component contains a textbox */
  test('render text input', () => {
    expect(NumberOfEventsWrapper.find('.eventNumberInput')).toHaveLength(1);
  });

  /* checks the value prop of element with class number is equal to
  * NumberOfEvents integer state */
  test('renders text input correctly', () => {
    const numberOfEvents = NumberOfEventsWrapper.state('numberOfEvents');
    expect(NumberOfEventsWrapper.find('.eventNumberInput').prop('value')).toBe(numberOfEvents);
  });

  // tests if the default number of events shown is 32
  test('render default number in the input is 32', () => {
    expect(NumberOfEventsWrapper.find('.eventNumberInput').prop('value')).toBe(32);
  });

   /* tests if NumberOfEvents component contains a div */
  test('render label', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
  });

 /* test change of state when number input changes */
  test('change state when text input changes', () => {
    NumberOfEventsWrapper.setState({
    numberOfEvents: 1
  });
  const eventObject = { target: { value: 2 }};
  NumberOfEventsWrapper.find('.eventNumberInput').simulate('change', eventObject);
  expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(2);
  });
});