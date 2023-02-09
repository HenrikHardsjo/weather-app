import React, { useContext} from "react";
import { WeatherContext } from "../Contexts/WeatherContext";


const TestView = () =>{

    const{weatherData, setWeatherData} = useContext(WeatherContext)



    console.log("hejj",weatherData);
}

export default TestView
