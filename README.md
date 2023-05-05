# meet

#Description
Meet is a serverless, progressive web application (PWA) using React with a test-driven development technique. The application uses the Google Calendar API to fetch upcoming events in a city.

#Technologies used
Javacript, React, Creat-React-App

#Dependencies
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4",
    "workbox-background-sync": "^6.5.4",
    "workbox-broadcast-update": "^6.5.4",
    "workbox-cacheable-response": "^6.5.4",
    "workbox-core": "^6.5.4",
    "workbox-expiration": "^6.5.4",
    "workbox-google-analytics": "^6.5.4",
    "workbox-navigation-preload": "^6.5.4",
    "workbox-precaching": "^6.5.4",
    "workbox-range-requests": "^6.5.4",
    "workbox-routing": "^6.5.4",
    "workbox-strategies": "^6.5.4",
    "workbox-streams": "^6.5.4"
  "devDependencies"
    "gh-pages": "^5.0.0" 

#Features, User Stories and BDD Scenarios
FEATURE 1: FILTER EVENTS BY CITY 
User story: As a user, I should be able to filter events by city so that I can see the events that take place in that city. 

SCENARIO 1: WHEN USER HASN’T SEARCHED FOR SPECIFIC CITY, SHOW UPCOMING EVENTS FROM ALL CITIES 
Given app is loaded 
When user hasn’t searched for any city 
Then the user should see a list of all upcoming events 

SCENARIO 2: USER SHOULD SEE A LIST OF SUGGESTIONS WHEN THEY SEARCH FOR CITY. 
Given the main page is open with the list of events in all cities 
When user starts typing the name of city in the text box 
Then the user should see a list of cities (suggestions) that match what they have typed 

SCENARIO 3: USER CAN SELECT A CITY FROM THE SUGGESTED LIST
Given the user was typing “Berlin” in the city textbox, and the list of suggested cities is showing 
When the user selects a city (e.g., “Berlin, Germany”) from the list of suggested cities Then the user city should be changed to the selected city (i.e. “Berlin, Germany”) and the user should receive a list of upcoming events in specified city 

FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS 
User story: As a user, I should be able to show/hide event details so that I can see more/less information about an event. 

SCENARIO 1: AN EVENT ELEMENT IS COLLAPSED BY DEFAULT 
Given app is loaded 
When user has received a list of upcoming events in specified city (all cities) 
Then event details are not visible for user 

SCENARIO 2: USER CAN EXPAND AN EVENT TO SEE ITS DETAILS 
Given user received general information about upcoming events 
When user pushes the button “Details” for specific event 
Then specific event is being expanded with the details 

SCENARIO 3: USER CAN COLLAPSE AN EVENT TO HIDE ITS DETAILS Given specific event is being expanded with the details 
When user pushes the button “Back” for specific event 
Then specific event is being collapsed, details are hidden, user receives full list of upcoming events with general information only 

FEATURE 3: SPECIFY NUMBER OF EVENTS 
User story: As a user, I should be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once. 

SCENARIO 1: WHEN USER HASN’T SPECIFIED A NUMBER, 32 IS THE DEFAULT NUMBER 
Given app is loaded, user has received a list of upcoming events in specified city (all cities)
When user hasn’t specified a number of events to be shown 
Then user receives first 32 upcoming events on the screen 

SCENARIO 2: USER CAN CHANGE THE NUMBER OF EVENTS THEY WANT TO SEE 
Given app is loaded, user has received a list of upcoming events in specified city (all cities) 
When user hasn’t specified a number of events to be shown by choosing the number in input (32 or 64 or 96) 
Then user receives first 32/64/96 upcoming events on the screen – according to the chosen number 

FEATURE 4: USE THE APP WHEN OFFLINE 
User story: As a user, I should be able to use the app when offline so that I can see the events I viewed the last time I was online. 

SCENARIO 1: SHOW CACHED DATA WHEN THERE’S NO INTERNET CONNECTION
Given user has previously opened the app with available internet connection 
When user opens the app without internet connection 
Then user receives cashed data from their last session (the last data user had seen with active internet connection)

SCENARIO 2: SHOW ERROR WHEN USER CHANGES THE SETTINGS (CITY, TIME RANGE) 
Given user has opened the app without internet connection and received cashed data from their last session 
When user changes the settings (city, time range) 
Then user receives error message indicating that data is not available without internet connection

FEATURE 5: DATA VISUALIZATION 
User story: As a user, I should be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.

SCENARIO 1: SHOW A CHART WITH THE NUMBER OF UPCOMING EVENTS IN EACH CITY 
Given app is loaded, user has received a list of upcoming events in specified city (all cities) 
When user push the button “Visualize” 
Then they will see a chart showing the number of upcoming events in that city, categorized by type
