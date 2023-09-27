import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherCard from '../components/WeatherCard';

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Kolkata');
  const [identifier, setIdentifier] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData(city) {
      setLoading(true);
      setError(false);
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/current.json?key=4f51070f148c47efa7750447232709&q=${city}&aqi=no`
        );
        console.log(response.data);
        setWeatherData(response.data);
      } catch (e) {
        if (e.response.status === 400) {
          setError(e.response.data.error.message);
        } else {
          console.log(e.response.status);
        }
      } finally {
        setLoading(false);
      }
    }
    if (city) {
      fetchData(city);
    }
  }, [city]);

  const debounceSearch = (serach, debounceTimeout) => {
    const func = identifier => {
      if (identifier) {
        clearTimeout(identifier);
      }
      identifier = setTimeout(() => {
        setCity(serach);
      }, debounceTimeout);
      setIdentifier(identifier);
    };
    return func(identifier);
  };
  return (
    <div className="grid grid-cols-1 justify-items-center items-center px-2">
      <div className="flex bg-blue-500 h-24 m-2 items-center justify-center w-full">
        <h2 className="text-3xl text-yellow-50">Weather App</h2>
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="my-4">
          <TextField
            label="Enter location"
            variant="outlined"
            onChange={e => {
              debounceSearch(e.target.value, 500);
            }}
          />
        </div>
        {loading ? (
          <p>loading ... </p>
        ) : error ? (
          <p className="text-red-500 text-xl my-10">{error}</p>
        ) : (
          weatherData && (
            <WeatherCard
              location={weatherData.location}
              weather={weatherData.current}
              icon={weatherData.current.condition.icon}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Weather;
