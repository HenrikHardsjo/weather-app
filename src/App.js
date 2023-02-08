import "./App1.css";
import Main from "./Main.jsx";

function App() {
  document.title = "Weather app"; //Ändrar namn på sidan.

  //Gör Api-fetchen till en komponent.
  

  return (
    <>
      <Main />
    </>
  );
}

export default App;
