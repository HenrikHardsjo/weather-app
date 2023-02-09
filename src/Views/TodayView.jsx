import React, { useContext} from "react";
import { WeatherContext } from "../Contexts/WeatherContext";
import TrimString from "../Components/TrimString";


const TodayView = () => {
  const { weatherData, setWeatherData } = useContext(WeatherContext);

  return (
    <div className="current-day-container">
      <div className="leftside">
        <h1 className="city">{weatherData.location.name}</h1>
        <h3 className="time">
          <TrimString InParam={[weatherData.location.localtime, 11, 16]} />
        </h3>
        <h3 className="weather">{weatherData.current.condition.text}</h3>

        <h3 className="date">
          <TrimString InParam={[weatherData.location.localtime, 0, 10]} />
        </h3>
      </div>

      <div className="rightside">
        <h2 className="temp">{weatherData.current.temp_c + "°C"}</h2>
        <img
          src={weatherData.current.condition.icon}
          alt="Placeholder"
          className="weather-icon"
        />
      </div>
    </div>
  );
};

export default TodayView;
