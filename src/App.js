import "./App.css";
import React, { useState } from "react";
//test

function App() {
  const apiKey = "7a4ad7b465225038fc5b97080cd918bf";
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("");

  const getWeather = (inputCity) =>
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=metric&appid=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        setCity("");
        console.log(data);
      });

  return (
    <div className="container">
      <input
        className="inputBox"
        placeholder="Enter a city..."
        onChange={(e) => setCity(e.target.value)}
        value={city}
      />
      <button
        className="test-button"
        onClick={() => {
          getWeather(city);
        }}
      >
        Sök
      </button>
    
      {typeof weatherData.main === "undefined" ? (
        <div>
          <p>Welcome to the weather app! Enter a city you want info on.</p>
        </div>
      ) : (
        <div className="weather-data">
          <p className="city">{weatherData.name}</p>
          <p className="temp">{Math.round(weatherData.main.temp)+"°C"}</p>
          <p className="weather">{weatherData.weather[0].main}</p>
        </div>
      )}

      {weatherData.cod === "404" ? (
        <p>City not found.</p>
      ): (<></>)}
    </div>
  );
}

export default App;
