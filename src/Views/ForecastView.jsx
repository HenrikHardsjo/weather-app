import React, { useContext} from "react";
import { WeatherContext } from "../Contexts/WeatherContext";
import ForecastCard1 from "../Components/ForecastCard1"

const ForecastView = () => {
  const { weatherData, setWeatherData } = useContext(WeatherContext);

  return (
    <div className="forecasts-container">
      {/* <ForecastCard1 InParam={[1,]}/>
        InParam={[weatherData.forecast.forecastday[inputDay].date, 5, 10]} */}

      {ForecastCard1(1)}
      {ForecastCard1(2)}
      {ForecastCard1(3)}
      {ForecastCard1(4)}
      {ForecastCard1(5)}
    </div>
  );
};

export default ForecastView;
