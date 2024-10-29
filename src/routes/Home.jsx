import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import InfoCard from '../components/InfoCard';
import './Home.css';

function Home() {
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
            <div className="info-container">
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
              <div className="chart-container">
              <div className="chart" style={{ borderRadius: '15px', overflow: 'hidden' }}>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={forecastData.data} style={{ backgroundColor: 'rgba(105, 100, 100, 0.8)' }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="datetime" stroke="white" label={{value: 'Days', position: 'insideBottomRight', offset: -5, fill: 'white' }}/>
                    <YAxis stroke="white" label={{ value: 'Temperature in °C', angle: -90, position: 'insideLeft', fill: 'white' }} />
                    <Tooltip contentStyle={{ backgroundColor: 'rgba(105, 100, 100, 0.7)', color: 'white' }} />
                    <Legend wrapperStyle={{ color: 'white' }} />
                    <Line type="monotone" dataKey="temp" stroke="red" activeDot={{ r: 8 }} />
                    <text x={200} y={20} fill="white" textAnchor="middle" dominantBaseline="central">
                      Daily average temperature
                    </text>
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="chart" style={{ borderRadius: '15px', overflow: 'hidden' }}>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={forecastData.data} style={{ backgroundColor: 'rgba(105, 100, 100, 0.8)' }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="datetime" stroke="white" label={{value: 'Days', position: 'insideBottomRight', offset: -5, fill: 'white' }}/>
                    <YAxis yAxisId="left" stroke="white" label={{ value: 'Temperature in °C', angle: -90, position: 'insideLeft', fill: 'white' }} />
                    <YAxis yAxisId="right" orientation="right" stroke="purple" label={{ value: 'Moon Phase', angle: 90, position: 'insideRight', fill: 'purple' }} />
                    <Tooltip contentStyle={{ backgroundColor: 'rgba(105, 100, 100, 0.7)', color: 'white' }} />
                    <Legend wrapperStyle={{ color: 'white' }} />
                    <Line yAxisId="left" type="monotone" dataKey="max_temp" stroke="orange" activeDot={{ r: 8 }} />
                    <Line yAxisId="left" type="monotone" dataKey="min_temp" stroke="blue" activeDot={{ r: 8 }} />
                    <Line yAxisId="right" type="monotone" dataKey="moon_phase" stroke="purple" activeDot={{ r: 8 }} />
                    <text x={200} y={20} fill="white" textAnchor="middle" dominantBaseline="central">
                      Max Temp, Min Temp, and Moon Phase
                    </text>
                  </LineChart>
                </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading weather data...</p>
        )}
    </>
  );
}

export default Home;