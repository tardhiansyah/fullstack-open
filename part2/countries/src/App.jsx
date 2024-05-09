import { useEffect, useState } from "react";
import axios from "axios";
import Country from "./components/Country";

const App = () => {
  const [value, setValue] = useState("");
  const [countries, setCountries] = useState([]);
  const [countriesToShow, setCountriesToShow] = useState([]);

  useEffect(() => {
    console.log("fetching data...");
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        console.log(response.data);
        setCountries(response.data);
      });
  }, []);

  useEffect(() => {
    console.log("value changed");
    if (value === "") {
      setCountriesToShow([]);
      return;
    }

    const filteredCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(value.toLowerCase())
    );

    setCountriesToShow(filteredCountries);
  }, [value, countries]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <div>
        <label>find countries: </label>
        <input type="text" value={value} onChange={handleChange} />
      </div>
      <div>
        {countriesToShow.length > 10 ? (
          <div>Too many matches, specify another filter</div>
        ) : countriesToShow.length === 1 ? (
          <div>
            <Country country={countriesToShow[0]} />
          </div>
        ) : (
          countriesToShow.map((country) => (
            <div key={country.name.common}>
              {country.name.common}
              <button
                onClick={() => {
                  setValue(country.name.common);
                }}
              >
                show
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;
