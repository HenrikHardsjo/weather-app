import React, { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../Contexts/WeatherContext";
import TrimString from "./TrimString";


const ForecastCard1 = (inputDay) => {
  const { weatherData, setWeatherData } = useContext(WeatherContext);


    return (
      <div className="forecast-day-container">
        <p className="forecast-text">
          <TrimString
            InParam={[weatherData.forecast.forecastday[inputDay].date, 5, 10]}
          />
        </p>
        <img
          src={weatherData.forecast.forecastday[inputDay].day.condition.icon}
          alt="Placeholder"
          className="weather-icon"
        />
        <p className="forecast-text">
          {weatherData.forecast.forecastday[inputDay].day.maxtemp_c}°C /{" "}
          {weatherData.forecast.forecastday[inputDay].day.mintemp_c}°C
        </p>
      </div>
    );
  };
 
export default ForecastCard1;
