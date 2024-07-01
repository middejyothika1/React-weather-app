


import React, {useState, useEffect} from 'react';
// import 'weather-icons/css/weather-icons.css';
import './WeatherDisplay.css'; // Ensure you import the CSS file
import clearDay from "./weather icons/01d.jpg";
import fewClouds from "./weather icons/02d.jpg";
import onlyCloud from "./weather icons/03d.png";
import onlyCloudNight from "./weather icons/03n.png";
import showerRain from "./weather icons/09d.jpg";
import rain from "./weather icons/10d.jpg";
import snow from "./weather icons/13d.jpg";
import thunderStrom from "./weather icons/011d.png";

const WeatherDisplay = ({ weatherData }) => {
  const [unit, setUnit] = useState('metric');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const currentHour = new Date().getHours();
    setCurrentTime(currentHour >= 6 && currentHour < 18 ? 'day' : 'night');
  }, []);

  const weatherIcons = {
    day: 'wi-day-sunny',
    night: 'wi-night-clear',
  };

  if (!weatherData) return <div>Loading...</div>;

  //weather icons
  const weatherconditions = {
    "01d": clearDay,
    "01n": clearDay,
    "02d": fewClouds,
    "02n": fewClouds,
    "03d": onlyCloud,
    "03n": onlyCloudNight,
    "09d": showerRain,
    "09n": showerRain,
    "10d": rain,
    "10n": rain,
    "11d": thunderStrom,
    "11n": thunderStrom,
    "13d": snow,
    "13n": snow,
    "04d": fewClouds,
    "04n": fewClouds,
    "50d": snow,
    "50n": snow,
  };

  return (
    <div className="weather-card">
      <h2>
        Weather Details
      </h2>
      <img src={weatherconditions[weatherData.weather[0].icon]}/>
      <p>Temperature: {weatherData.main.temp} °C</p>
      <p>Main: {weatherData.weather?.[0].main}</p>
      <p>Weather: {weatherData.weather[0].description}</p>
      <p>Humidity: {weatherData.main.humidity} %</p>
      <p>Windspeed: {weatherData.wind?.speed} {unit === 'metric' ? 'm/s' : 'mph'}</p>
      <div className="weather-icon">
        <label>Weather Icon: </label>
        <i className={`wi ${weatherIcons[currentTime]}`}></i>
      </div>
      <p>Latitude: {weatherData.coord?.lat}</p>
      <p>Longitude: {weatherData.coord?.lon}</p>
      <p>Chance of Rain: {weatherData.weather?.[0].main === 'Rain' ? 'Getting Rain' : 'Not Getting Rain'}</p>
    </div>
  );
};

export default WeatherDisplay;







