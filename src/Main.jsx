import "./App1.css";
import React, { useState } from "react";

const Main = () =>{
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("");

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const getWeather = (inputCity) =>
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=d6d4942da58b4ee095284628230702&q=${inputCity}&days=6&aqi=no&alerts=no`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        setCity("");
        console.log(data);
      });

  const trimTime = (inputString, start, stop) => {
    const newtimeString = inputString.slice(start, stop); //11,16 för tid //0,10 för datum
    return newtimeString;
  };

  const ForecastCard = (inputDay) => {
    return (
      <div className="forecast-day-container">
        <p className="forecast-text">
          {trimTime(weatherData.forecast.forecastday[inputDay].date, 5, 10)}
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

  return (
    <div className="main-container">
      <input
        className="inputBox"
        placeholder="Enter a city..."
        onChange={(e) => setCity(e.target.value)}
        value={city}
      />
      <p>{weatherData.main}</p>
      <button
        className="search-button"
        onClick={() => {
          getWeather(city);
        }}
      >
        Search
      </button>

      {typeof weatherData.location === "undefined" ? (
        <div>
          <h1>Which city do you want to know the weather of?</h1>
        </div>
      ) : (
        <div className="weather-data">
          <div className="current-day-container">
            <div className="leftside">
              <h1 className="city">{weatherData.location.name}</h1>
              <h3 className="time">
                {trimTime(weatherData.location.localtime, 11, 16)}
              </h3>
              <h3 className="weather">{weatherData.current.condition.text}</h3>

              <h3 className="date">
                {trimTime(weatherData.location.localtime, 0, 10)}
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

          <div className="forecasts-container">
            {ForecastCard(1)}
            {ForecastCard(2)}
            {ForecastCard(3)}
            {ForecastCard(4)}
            {ForecastCard(5)}
          </div>
        </div>
      )}
    </div>
  );

  
}

export default Main;
