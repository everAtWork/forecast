import React from "react";
import Forecast from "./components/Forecast/Forecast";
import WeatherChart from "./components/WeatherChart/WeatherChart";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather App</h1>
      </header>
      <main>
        <Forecast />
        <WeatherChart />
      </main>
    </div>
  );
}
export default App;
