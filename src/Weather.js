import React from 'react';
import axios from 'axios';
export default function Weather(){
  function handleResponse(response) {
    alert(`The weather in New York is ${response.data.main.temp}°C`);
  }
  let apiKey = "816a63a33af440332c05784e3d9896ea";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  
  return null;
}