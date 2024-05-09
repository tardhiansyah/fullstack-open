import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
      console.log("fetching data...");
      axios
        .get("https://studies.cs.helsinki.fi/restcountries/api/all")
        .then((response) => {
          console.log(response.data);
        });
    }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
  }
  return (
    <div>
      <label>find countries: </label>
      <input type="text" value={value} onChange={handleChange}/>
    </div>
  );
};

export default App;
