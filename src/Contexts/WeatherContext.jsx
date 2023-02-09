import React, { createContext, useState} from "react";

export const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState({}); //useState([{}])

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };


  const SearchWeather = (inputCity) => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=d6d4942da58b4ee095284628230702&q=${inputCity}&days=6&aqi=no&alerts=no`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        console.log(data);
      });
  };

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        setWeatherData,
        SearchWeather,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
