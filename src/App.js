import "./App1.css";
// import Main from "./Main.jsx";
// import TestView from "./Views/TestView";
import Searchbar from "./Components/Searchbar";
import WeatherProvider from "./Contexts/WeatherContext";
import WeatherView from "./Views/WeatherView";

function App() {
  document.title = "Weather app"; //Ändrar namn på sidan.


  return (
    <WeatherProvider>
      <Searchbar/>
      <WeatherView/>
    </WeatherProvider>
    // <Main/>
  );
}

export default App;
