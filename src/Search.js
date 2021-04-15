import React, {useState} from 'react';
import axios from 'axios';
import "./Search.css";

export default function Search(props) {
    const [city, setCity] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [temperature, setTemperature] = useState(null);

  function showTemperature(response) {
    setTemperature({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description
    });
    setLoaded(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `816a63a33af440332c05784e3d9896ea`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

    let form = (
      <div className="Search">
      <form onSubmit={handleSubmit} id="search-form">
        <div className="searching-bar">
          <input
            id="search-bar"
            type="search"
            placeholder="Search another city"
            onChange={updateCity}
          />
          <button id="search-button" type="submit">Search</button>
          <button id="current-button">Current</button>
        </div>
      </form>
    </div>
    )
    if (loaded){
      return (
        (props.temp = Math.round(temperature.temperature))
    
  );
    } else {
      return form;
    }
}