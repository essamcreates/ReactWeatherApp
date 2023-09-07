import React, { useState } from "react";

function WeatherForm({ setData }) {
  const [location, setLocation] = useState("");
  const apiKey = "675c909bb6e473c6f016cc85feaaf82b";

  const searchLocation = async (event) => {
    if (event.key === "Enter") {
      try {
        const response = await fetch(
          `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${apiKey}`
        );

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();

        if (data.length > 0) {
          // Assuming the first result is the desired location
          const { lat, lon } = data[0];
          setData({ lat, lon });
          console.log({ lat, lon });
        } else {
          console.log("Location not found.");
        }

        setLocation("");
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    }
  };

  return (
    <div className="search">
      <input
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="Enter Location"
        type="text"
      />
    </div>
  );
}

export default WeatherForm;
