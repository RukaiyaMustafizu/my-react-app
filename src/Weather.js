import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity || "Tilburg");

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      city: response.data.name,
      coordinates: response.data.coord,
    });
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse); // Fetch the data and process it with handleResponse
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                value={city}
                onChange={handleCityChange}
                autoFocus
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>

        {/* Display the weather details */}
        <h1>{weatherData.city}</h1>

        <div className="row">
          <div className="col-6">
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
              alt={weatherData.description}
              style={{
                width: "100px",
                height: "100px",
                position: "relative",
                top: "20px",
              }}
            />
            <span className="Temperature">{weatherData.temperature}</span>
            <span className="Unit">°C|°F</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 0%</li>{" "}
              {/* Replace 0 with actual precipitation value */}
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                value={city}
                onChange={handleCityChange}
                autoFocus
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <p>Loading...</p>
      </div>
    );
  }
}
