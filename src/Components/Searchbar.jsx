import React, { useContext, useRef } from "react";
import { WeatherContext } from "../Contexts/WeatherContext";

const Searchbar = () => {
  const { SearchWeather } = useContext(WeatherContext);

  const cityInput = useRef();

  return (
    <div className="main-container">
      <input
        className="inputBox"
        placeholder="Enter a location..."
        ref={cityInput}
        onKeyDown={(e) =>{
          if(e.key === "Enter"){
            SearchWeather(cityInput.current.value);
            cityInput.current.value="";
          }
        }}
      />

      <button
        className="search-button"
        onClick={() => {
          SearchWeather(cityInput.current.value);
          cityInput.current.value="";
        }}
      > 
        Search
      </button>
    </div>
  );
};

export default Searchbar;
