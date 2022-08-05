import axios from "axios";
import React, { useEffect, useState } from "react";
import useGeolocation from "react-hook-geolocation";

const LocationCmp = () => {
  const [location, setLocation] = useState<any>();
  const { longitude, latitude } = useGeolocation({
    timeout: 12000,
    enableHighAccuracy: false,
  });

  useEffect(() => {
    async function fetchPlace() {
      const loc = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.REACT_APP_GOOGLE_KEY}`
      );

      setLocation(loc.data.plus_code.compound_code || "Nigeria");
    }

    fetchPlace();
  }, [setLocation, latitude, longitude]);

  return <div>{location}</div>;
};

export default LocationCmp;
