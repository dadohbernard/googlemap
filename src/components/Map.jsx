import React, { useState, useEffect, useRef } from "react";
import { Flex, Box, SkeletonText } from "@chakra-ui/react";
import Car from "../assets/images/car.png";
import {
  useJsApiLoader,
  GoogleMap,
  DirectionsRenderer,
  Marker,
} from "@react-google-maps/api";
import Eta from "./Eta";

const nyabugogo = { lat: -1.939826787816454, lng: 30.0445426438232 };

function Map() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAzKWRMts35ED0QXwm163fS25fp-9x6Y7I",
    libraries: ["places"],
  });

  const [directionsResponse, setDirectionsResponse] = useState("");
  const [nextStopDistance, setNextStopDistance] = useState("");
  const [nextStopDuration, setNextStopDuration] = useState("");
  const [nextStopName, setNextStopName] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");

  const distanceMatrixService = useRef();
  const waypoints = useRef([
    {
      name: "Stop A Kinamba",
      location: { lat: -1.9355377074007851, lng: 30.060163829002217 },
      stopover: true,
    },
    {
      name: "Stop B Kacyiru",
      location: { lat: -1.9358808342336546, lng: 30.08024820994666 },
      stopover: true,
    },
    {
      name: "Stop C Kimihurura",
      location: { lat: -1.9489196023037583, lng: 30.092607828989397 },
      stopover: true,
    },
    {
      name: "Stop D Remera",
      location: { lat: -1.9592132952818164, lng: 30.106684061788073 },
      stopover: true,
    },
    {
      name: "Stop E Kimironko",
      location: { lat: -1.9487480402200394, lng: 30.126596781356923 },
      stopover: true,
    },
  ]);
  const currentStopIndex = useRef(0);
  const center = useRef(null);

  useEffect(() => {
    if (isLoaded) {
      distanceMatrixService.current =
        new window.google.maps.DistanceMatrixService();
      calculateRoute();
      getCurrentLocation();
    }
  }, [isLoaded]);

  useEffect(() => {
    if (isLoaded && distanceMatrixService.current) {
      calculateNextStopInfo();
    }
  }, [isLoaded, currentStopIndex.current]);

  useEffect(() => {
    const timer = setInterval(() => {
      calculateNextStopInfo();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  async function getCurrentLocation() {
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
      const { latitude, longitude } = position.coords;
      center.current = { lat: latitude, lng: longitude };
      setCurrentLocation({ lat: latitude, lng: longitude });
      calculateRoute();
    } catch (error) {
      console.error("Error getting current location:", error);
    }
  }

  async function calculateNextStopInfo() {
    if (!distanceMatrixService.current) return;
    const nextStop = waypoints.current[currentStopIndex.current];
    const currentLocation = center.current;
    distanceMatrixService.current.getDistanceMatrix(
      {
        origins: [currentLocation],
        destinations: [nextStop.location],
        travelMode: "DRIVING",
      },
      (response, status) => {
        if (status === "OK") {
          const element = response.rows[0].elements[0];
          setNextStopDistance(element.distance.text);
          setNextStopDuration(element.duration.text);
          setNextStopName(nextStop.name);
          if (element.duration.value < 300) {
            clearInterval(interval);
          }
        } else {
          console.error("Error calculating distance matrix:", status);
        }
      }
    );
    const interval = setInterval(() => {
      calculateNextStopInfo();
    }, 10000);
  }

  async function calculateRoute() {
    if (!isLoaded) return;
    const directionsService = new window.google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: nyabugogo,
      destination: { lat: -1.9365670876910166, lng: 30.13020167024439 },
      optimizeWaypoints: false,
      travelMode: window.google.maps.TravelMode.DRIVING,
      waypoints: waypoints.current.map((waypoint) => ({
        location: waypoint.location,
      })),
    });
    setDirectionsResponse(results);
  }

  if (!isLoaded) {
    return <SkeletonText />;
  }

  return (
    <Flex flexDirection="column" alignItems="left" h="80vh" w="100vw">
      <Box top={0} p={2} mt="60px" w={{ base: "100%", md: "85%" }}>
        <Eta
          nextStopName={nextStopName}
          nextStopDistance={nextStopDistance}
          nextStopDuration={nextStopDuration}
        />
      </Box>
      <Box position="relative" left={0} top={0} h="100%" w="100%">
        <GoogleMap
          center={center.current}
          zoom={15}
          mapContainerStyle={{ width: "100%", height: "82vh" }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
        >
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
          {currentLocation && <Marker position={currentLocation} icon={Car} />}
        </GoogleMap>
      </Box>
    </Flex>
  );
}

export default Map;
