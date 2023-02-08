import TrimString from "./TrimString";
import React from "react";

const ForecastCard = ({weatherData}) => {
  //let InParamArray = props.InParam2;

  //let weatherData = InParamArray[0];
  //let inputDay = InParamArray[1];


  return (
    
    console.log({weatherData})
    // <div className="forecast-day-container">
    //   <p className="forecast-text">
    //     <TrimString
    //       InParam={[weatherData.forecast.forecastday[inputDay].date, 5, 10]}
    //     />
    //   </p>
    //   <img
    //     src={weatherData.forecast.forecastday[inputDay].day.condition.icon}
    //     alt="Placeholder"
    //     className="weather-icon"
    //   />
    //   <p className="forecast-text">
    //     {weatherData.forecast.forecastday[inputDay].day.maxtemp_c}°C /{" "}
    //     {weatherData.forecast.forecastday[inputDay].day.mintemp_c}°C
    //   </p>
    // </div>
  );
};

// const ForecastCard = (inputDay) => {
//     return (
//       <div className="forecast-day-container">
//         <p className="forecast-text">
//           <TrimString
//             InParam={[weatherData.forecast.forecastday[inputDay].date, 5, 10]}
//           />
//         </p>
//         <img
//           src={weatherData.forecast.forecastday[inputDay].day.condition.icon}
//           alt="Placeholder"
//           className="weather-icon"
//         />
//         <p className="forecast-text">
//           {weatherData.forecast.forecastday[inputDay].day.maxtemp_c}°C /{" "}
//           {weatherData.forecast.forecastday[inputDay].day.mintemp_c}°C
//         </p>
//       </div>
//     );
//   };

export default ForecastCard;
