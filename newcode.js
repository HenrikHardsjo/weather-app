import "./App.css";
import React, { useState } from "react";

function App() {
  const apiKey = "7a4ad7b465225038fc5b97080cd918bf";
  const newApiKey = "4eb485303b48416baaf84135230702"; 
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("");
  document.title = "Weather app"; //Ändrar namn på sidan.

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };



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
          <p>Enter a city you want the weather of.</p>
        </div>
      ) : (
        <div className="weather-data">
          <p>Hej</p>
          {/* <p className="city">{weatherData.location.name}</p>
          <p className="temp">{weatherData.location.name}</p>
          <p className="weather">{weatherData.location.name}</p> */}
        </div>
      )}

      {weatherData.cod === "404" ? (
        <p>City not found.</p>
      ): (<></>)}
    </div>
  );
}

export default App;
