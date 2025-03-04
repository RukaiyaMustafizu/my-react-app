import React from "react";
import Weather from "./Weather"; // Make sure this points to your Weather component
import "bootstrap/dist/css/bootstrap.min.css"; // If you're using Bootstrap for styling
import "./App.css"; // If you have custom styles
import "./Weather.css"; // If you have custom weather-related styles
import "./WeatherForecast.css";

function App() {
  return (
    <body>
      <div className="App">
        <Weather defaultCity="Tilburg" /> {/* You can set a default city */}
      </div>
    </body>
  );
}

export default App;
