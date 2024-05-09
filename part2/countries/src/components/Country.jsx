import axios from "axios";
import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
const Country = ({ country }) => {
  const [weather, setWeather] = useState(null);
  const name = country.name.common;
  const capital = country.capital;
  const area = country.area;
  const latitude = country.capitalInfo.latlng[0];
  const longitude = country.capitalInfo.latlng[1];
  const apiKey = import.meta.env.VITE_OPEN_WEATHER_KEY;

  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
      )
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setWeather(response.data);
      });
  }, [latitude, longitude, apiKey]);

  if (weather == null) {
    return null;
  }

  const kelvinToCelcius = (kelvin) => {
    let celcius = kelvin - 273.15;
    celcius = celcius.toFixed(2);
    return celcius;
  };

  return (
    <div>
      <h1>{name}</h1>
      <div>
        <p>Capital: {capital}</p>
        <p>Area: {area}</p>
      </div>
      <div>
        <h3>Languages:</h3>
        <ul>
          {Object.values(country.languages).map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
      </div>
      <div>
        <img src={country?.flags?.png} alt={country?.flag?.alt} />
      </div>
      <div>
        <h2>Weather in {capital}</h2>
        <p>Temperature: {kelvinToCelcius(weather?.main?.temp)} Celcius</p>
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0]?.icon}@2x.png`}
          alt="weather icon"
        />
        <p>Wind: {weather?.wind?.speed} m/s</p>
      </div>
    </div>
  );
};

export default Country;
