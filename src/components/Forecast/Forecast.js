import React, { useState } from "react";
import Conditions from "../Conditions/Conditions";
const Forecast = () => {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  let [responseObj, setResponseObj] = useState({});

  function getForecast(e) {
    e.preventDefault();
    if (city.length === 0) {
      return setError(true);
    }
    setError(false);
    setResponseObj({});
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?units=metric&appid=bad46dfee1ae1125ec4faf31e63449de&q=${city}`
    )
      .then((response) => response.json())
      .then((response) => {
        if (response.cod !== "200") {
          // условия перенести в conditions, ну йоптваю
          throw new Error();
        }
        console.log(response);
        setResponseObj(response);
        console.log(response);
      })
      .catch((err) => {
        setError(true);
        console.log(err.message);
      });
  }
  return (
    <div>
      <h2>Find Current Weather Conditions</h2>
      <form onSubmit={getForecast}>
        <input
          type="text"
          placeholder="Enter City"
          maxLength="50"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Get Forecast</button>
      </form>
      <Conditions responseObj={responseObj} error={error} />
    </div>
  );
};
export default Forecast;
