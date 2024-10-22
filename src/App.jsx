import { useState, useEffect } from 'react';
import './App.css';
import InfoCard from './components/InfoCard';
import Sidebar from './components/Sidebar';

function App() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const location = 'Gettysburg, PA'; // change to user's location
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [tempFilter, setTempFilter] = useState(50); // Initial value for the slider

  useEffect(() => {
    const fetchCurrWeather = async () => {
      try {
        const response = await fetch(`https://api.weatherbit.io/v2.0/current?key=${API_KEY}&city=${location}`);
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const fetchForecast = async () => {
      try {
        const response = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?key=${API_KEY}&city=${location}`);
        const data = await response.json();
        setForecastData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCurrWeather();
    fetchForecast();
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleTempFilterChange = (event) => {
    setTempFilter(event.target.value);
  };

  const filteredForecastData = forecastData
    ? forecastData.data.filter((day) =>
        day.datetime.includes(searchQuery) && day.temp <= tempFilter
      )
    : [];

  return (
    <>
      <div className="container">
        <Sidebar />
        {weatherData ? (
          <div className="content">
            <div className="top-row">
              <InfoCard attribute="Location" value={location} />
              <InfoCard
                attribute="Condition"
                value={weatherData.data[0].weather.description}
                icon={`https://cdn.weatherbit.io/static/img/icons/${weatherData.data[0].weather.icon}.png`}
              />
              <InfoCard attribute="Temperature" value={weatherData.data[0].temp} />
            </div>
            <br />
            <input
              className='search-bar'
              type="text"
              placeholder="Search by date (YYYY-MM-DD)"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <input className='temp-filter'
              type="range"
              min="0"
              max="50"
              value={tempFilter}
              onChange={handleTempFilterChange}
            />
            <span>{tempFilter}°C</span>
            <table className="forecast-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Temperature</th>
                  <th>Max Temp</th>
                  <th>Min Temp</th>
                </tr>
              </thead>
              <tbody>
                {filteredForecastData.map((day, index) => (
                  <tr key={index} className="forecast-item">
                    <td>{day.datetime}</td>
                    <td>{day.temp}</td>
                    <td>{day.max_temp}</td>
                    <td>{day.min_temp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>Loading weather data...</p>
        )}
      </div>
    </>
  );
}

export default App;
