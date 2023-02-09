import React, { useContext} from "react";
import { WeatherContext } from "../Contexts/WeatherContext";
import ForecastView from "./ForecastView";
import TodayView from "./TodayView";


const WeatherView = () => {
  const { weatherData, setWeatherData } = useContext(WeatherContext);

  return (
    <div className="main-container">
      {typeof weatherData.location === "undefined" ? (
        <div>
          <h1>Which city do you want to know the weather of?</h1>
        </div>
      ) : (
        <div className="weather-data">

            <TodayView/>
            <ForecastView/>



        </div>
      )}
    </div>
  );
};

export default WeatherView;
