import React from "react";
import "./App.css";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="enter a city"
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>

      <h1>Tilburg</h1>
      <ul>
        <li>Tuesday 11:00</li>
        <li>Mostly sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="weather-icon"
          />
          <span className="Temperature">8</span>{" "}
          <span className="Unit"> °C|°F</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 0% </li>
            <li>Humidity: 68% </li>
            <li>Humidity: 68%</li>
            <li>Wind: 2 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
