import './App.css';
import Search from "./Search";
import Details from "./Details";
import Forecast from "./Forecast";

function App() {
  return (
    <div class="container">
      <div class="weather-app">
        <Search />
        <div className="App">
          <div className="ppal-temp">
            <img
              src="https://openweathermap.org/img/wn/04d@2x.png"
              alt=".."
              id="icon"
            />
            <strong id="temp-element">14°</strong>
            <small>C | F</small>
            <div className="location-icon">
              <i className="fas fa-map-marker-alt" id="location"></i>
              <h2 className="location" id="city">
                New York, USA
              </h2>
            </div>
          </div>
        </div>
        <Details />
        <Forecast />
      </div>
      <small>
        <a
          href="https://github.com/GabrielaParedes27/vanilla-weather-app.git"
          target="blank"
        >
          Open-source code
        </a>
        by Gabriela Paredes
      </small>
    </div>
  );
}

export default App;
