import "./App.css";
import React, { useState } from "react";

function App() {
  const apiKey = "7a4ad7b465225038fc5b97080cd918bf";
  const newApiKey = "4eb485303b48416baaf84135230702";
  const [weatherData, setWeatherData] = useState([{}]);
  const timeString = "";
  const [city, setCity] = useState("");
  document.title = "Weather app"; //Ändrar namn på sidan.

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const getWeather = (inputCity) =>
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=d6d4942da58b4ee095284628230702&q=${inputCity}&days=5&aqi=no&alerts=no`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        setCity("");
        console.log(data);

        //console.log(weatherData.location.name);
      });

  const trimTime = (inputString) => {
    const newtimeString = inputString.slice(11, 16);
    return newtimeString;
  };

  const showDetails = () => {
    return (
      <div>
        <p>Hello</p>
      </div>
    );
  };

  return (
    <div className="container">
      <input
        className="inputBox"
        placeholder="Enter a city..."
        onChange={(e) => setCity(e.target.value)}
        value={city}
      />
      <p>{weatherData.main}</p>
      <button
        className="test-button"
        onClick={() => {
          getWeather(city);
        }}
      >
        Sök
      </button>
      <button
        className="test-button"
        onClick={() => {
          trimTime(weatherData.location.localtime);
        }}
      >
        testa tid
      </button>

      {typeof weatherData.location === "undefined" ? (
        <div>
          <p>Which city do you want to know the weather of?</p>
        </div>
      ) : (
        <div className="today-container">
          <div className="weather-data">
            <p className="city">{weatherData.location.name}</p>
            <p className="temp">{weatherData.current.temp_c + "°C"}</p>
            <p className="weather">{weatherData.current.condition.text}</p>
            {/* <p className="weather">{weatherData.location.localtime}</p> */}
            <p className="weather">
              {trimTime(weatherData.location.localtime)}
            </p>
          </div>
          <br></br>
          <div className="weather-data">
            <p className="city">{weatherData.location.name}</p>
            <p className="temp">{weatherData.current.temp_c + "°C"}</p>
            <p className="weather">{weatherData.current.condition.text}</p>
            {/* <p className="weather">{weatherData.location.localtime}</p> */}
            <p className="weather">
              {trimTime(weatherData.location.localtime)}
            </p>
          </div>

        </div>
      )}
    </div>
  );
}

export default App;
