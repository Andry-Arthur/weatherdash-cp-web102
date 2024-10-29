import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

function ForecastDetails() {
  const { date } = useParams();
  const location = useLocation();
  const { forecast } = location.state;

  if (!forecast) {
    return <p>Loading forecast details...</p>;
  }

  return (
    <div style={{ backgroundColor: 'white', borderRadius: '10px', padding: '20px' }}>
      <h1>Forecast Details for {date}</h1>
      <p>Apparent Max Temp: {forecast.app_max_temp}°C</p>
      <p>Apparent Min Temp: {forecast.app_min_temp}°C</p>
      <p>Clouds: {forecast.clouds}%</p>
      <p>High Clouds: {forecast.clouds_hi}%</p>
      <p>Low Clouds: {forecast.clouds_low}%</p>
      <p>Mid Clouds: {forecast.clouds_mid}%</p>
      <p>Dew Point: {forecast.dewpt}°C</p>
      <p>High Temp: {forecast.high_temp}°C</p>
      <p>Low Temp: {forecast.low_temp}°C</p>
      <p>Max Temp: {forecast.max_temp}°C</p>
      <p>Min Temp: {forecast.min_temp}°C</p>
      <p>Moon Phase: {forecast.moon_phase}</p>
      <p>Moon Phase Lunation: {forecast.moon_phase_lunation}</p>
      <p>Moonrise Timestamp: {new Date(forecast.moonrise_ts * 1000).toLocaleTimeString()}</p>
      <p>Moonset Timestamp: {new Date(forecast.moonset_ts * 1000).toLocaleTimeString()}</p>
      <p>Ozone: {forecast.ozone} DU</p>
      <p>Probability of Precipitation: {forecast.pop}%</p>
      <p>Precipitation: {forecast.precip} mm</p>
      <p>Pressure: {forecast.pres} hPa</p>
      <p>Relative Humidity: {forecast.rh}%</p>
      <p>Sea Level Pressure: {forecast.slp} hPa</p>
      <p>Snow: {forecast.snow} mm</p>
      <p>Snow Depth: {forecast.snow_depth} mm</p>
      <p>Sunrise Timestamp: {new Date(forecast.sunrise_ts * 1000).toLocaleTimeString()}</p>
      <p>Sunset Timestamp: {new Date(forecast.sunset_ts * 1000).toLocaleTimeString()}</p>
      <p>Temperature: {forecast.temp}°C</p>
      <p>UV Index: {forecast.uv}</p>
      <p>Visibility: {forecast.vis} km</p>
      <p>Weather: {forecast.weather.description}</p>
      <p>Wind Direction: {forecast.wind_cdir_full} ({forecast.wind_cdir})</p>
      <p>Wind Direction (Degrees): {forecast.wind_dir}°</p>
      <p>Wind Gust Speed: {forecast.wind_gust_spd} m/s</p>
      <p>Wind Speed: {forecast.wind_spd} m/s</p>
    </div>
  );
}

export default ForecastDetails;