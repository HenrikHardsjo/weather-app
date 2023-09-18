import React, { createContext, useState} from "react";

export const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState({}); //useState([{}])

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };


  // const SearchWeather = (inputCity) => {
  //   fetch(
  //     `https://api.weatherapi.com/v1/forecast.json?key=a68cd35bad144edda19132135231304&q=${inputCity}&days=6&aqi=no&alerts=no`,
  //     requestOptions
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setWeatherData(data);
  //       console.log(data);
  //     });
  // };

  const SearchWeather = (inputCity) => {
    fetch(
      `http://localhost:4000/getWeather/${inputCity}`,  // New endpoint
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
