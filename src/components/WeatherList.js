import React from "react";

function WeatherList({ data }) {
  return (
    <div className="bottom">
      <div className="feels">
        {data.main ? (
          <>
            <p className="bold">{data.main.feels_like.toFixed()}°C</p>
            <p>Feels Like</p>
          </>
        ) : null}
      </div>
      <div className="humidity">
        {data.main ? (
          <>
            <p className="bold">{data.main.humidity}%</p>
            <p>Humidity</p>
          </>
        ) : null}
      </div>
      <div className="wind">
        {data.wind ? (
          <>
            <p className="bold">{data.wind.speed.toFixed()} MPH</p>
            <p>Wind Speed</p>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default WeatherList;

