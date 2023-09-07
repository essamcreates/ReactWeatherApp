import React, { useState, useEffect } from 'react';
import WeatherForm from '../components/WeatherForm';
import Weather from '../components/Weather';
import WeatherList from '../components/WeatherList';

function WeatherContainer() {
  const [data, setData] = useState({});
  const [weatherData, setWeatherData] = useState({}); // Add weatherData state

  useEffect(() => {
    // Fetch weather data based on the received latitude and longitude
    if (data.lat && data.lon) {
      const apiKey = "675c909bb6e473c6f016cc85feaaf82b";
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&units=metric&appid=${apiKey}`;

      fetch(weatherUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
          }
          return response.json();
        })
        .then((weatherData) => {
          setWeatherData(weatherData);
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });
    }
  }, [data]);

  return (
    <div className="container">
      <WeatherForm setData={setData} />
      <Weather data={weatherData} /> {/* Pass weatherData to Weather component */}
      <WeatherList data={weatherData} /> {/* Pass weatherData to WeatherList component */}
    </div>
  );
}

export default WeatherContainer;
