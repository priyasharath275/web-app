import React, { useState } from "react";
import "./WeatherSearch.css"; // Import CSS file for styling

const WeatherSearch = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = "1635890035cbba097fd5c26c8ea672a1";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div >
      <form onSubmit={handleSubmit} style={{display:"flex" ,flexDirection:"row" ,gap:"10px"}}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button type="submit">Search</button>
      </form>
      {loading ? (
        <p>Loading...</p>
      ) : weatherData ? (
        <div>
          <h2>Weather forecast for {city}</h2>
          {weatherData.list.map((val, index) => (
            <table key={index} className="weather-table">
              <thead>
                <tr>
                  <th colSpan="2">Date: {val.dt_txt}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th colSpan="2">Temperature</th>
                </tr>
                <tr>
                  <td>Min</td>
                  <td>Max</td>
                </tr>
                <tr>
                  <td>{val.main.temp_min}</td>
                  <td>{val.main.temp_max}</td>
                </tr>
                <tr>
                  <td>Pressure</td>
                  <td>{val.main.pressure}</td>
                </tr>
                <tr>
                  <td>Humidity</td>
                  <td>{val.main.humidity}</td>
                </tr>
              </tbody>
            </table>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default WeatherSearch;
