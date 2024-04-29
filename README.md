# Overview

This project is a web application designed to provide real-time navigation along a predefined route using the Google Maps API. The application displays an interactive map with the entire route from Nyabugogo to Kimironko, marked stops, and the estimated time to reach each upcoming stop. It tracks the driver's current location (where you see the car Icon is the current location of the drive or device you are using) in real-time and continuously updates the estimated arrival time (ETA) for the next stop.

# Features

Interactive map displaying the entire route with marked stops.
Real-time tracking of the driver's current location.
Calculation and display of the ETA for the next stop.
Seamless integration with the Google Maps API for mapping and routing functionalities.
Responsive design for optimal viewing experience across devices.

# Technologies Used

Front-end: React.js
Mapping and Routing: Google Maps API

# Getting Started

## Project Structure

The project follows the following directory structure:

src
├── components
│   ├── Map.jsx
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── Eta.jsx
├── pages
│   └── Home.jsx
└── screenshot
│   └── (images)
└── assets
    ├── css
    │   ├── HeaderCss.css
    │   └── FooterCss.css
    └── images
        └── (image files)
app.js


## Code Explanation

1. Map.jsx:

- Google Maps API Integration: Utilizes the @react-google-maps/api package to integrate with the Google Maps API for mapping and routing functionalities.

- Real-Time Tracking: Implements real-time tracking of the driver's current location using the Geolocation API (navigator.geolocation.getCurrentPosition). Updates the marker representing the current location as the driver moves.

- Route Calculation: Utilizes the Google Maps Directions API to calculate the route between the starting point (Nyabugogo) and the ending point (Kimironko), as well as any intermediate stops (Stop A, Stop B, Stop C, Stop D, Stop E). The calculated route is rendered on the map using the DirectionsRenderer component.

- ETA Calculation: Calculates and displays the Estimated Time of Arrival (ETA) for the next stop using the Google Maps Distance Matrix service. The calculateNextStopInfo function continuously updates the ETA based on the driver's current location and the distance to the next stop.

- Distance Matrix API: Utilizes the Google Maps Distance Matrix API to calculate distances and travel times between the driver's current location and the next stop. This information is used to update the ETA for the next stop dynamically.

2. Header.jsx and Footer.jsx:

Responsible for rendering the header and footer sections of the web page.
Utilizes CSS files (HeaderCss.css and FooterCss.css) for styling.

3. Eta.jsx:

Component for displaying the Estimated Time of Arrival (ETA) for the next stop.
Home.jsx (in the pages directory):
Main page component that imports and composes the header, map, ETA, and footer components.

## APIs Used

### To use Google map for to perform all this activities we have to enable all of these APIs and Services

1. Google Maps JavaScript API:
Used for displaying the interactive map, rendering the route, and providing various mapping functionalities such as zooming, panning, and map controls.
Integration with React is facilitated by the @react-google-maps/api package, which provides React components that wrap the functionality of the Google Maps JavaScript API.

2. Google Maps Directions API:
Enables route calculation between locations, including the starting point, intermediate stops, and ending point.
The DirectionsService provided by the Google Maps JavaScript API is utilized to request and receive directions.

3. Google Maps Distance Matrix API:
Used to calculate distances and travel times between locations, aiding in dynamic ETA updates for the next stop.
The DistanceMatrixService provided by the Google Maps JavaScript API is utilized to obtain distance and duration information.

3. Geolocation API:
Utilized for real-time tracking of the driver's current location.
The navigator.geolocation.getCurrentPosition method is used to obtain the current geolocation of the device. it indicated by Car Icon on Map (anywhere you get car icon on map, is the current location of your device)

## Additional Notes

- Responsive Design: The project utilizes responsive design principles to ensure optimal viewing experience across various devices.
- React.js: The front-end framework used for building the project, facilitating the creation of reusable components and managing component state.


# NB

As my current position isn't at Nyabugogo, you'll notice on the screenshot that the car icon doesn't appear there as my location. Instead, it shows my current location as Gisozi. So, when I begin a trip from Nyabugogo, you'll see the car icon starting from there and receiving real-time updates. Testing this project isn't straightforward; it involves traveling along these roads multiple times. Initially, it tracks your current location anywhere, estimates it, calculates the current location and the next stop point, and then updates you on the estimated time of arrival (ETA). Therefore, for more accurate testing, we need to ensure that our current location is set to Nyabugogo. Thank you for your attention to this matter!