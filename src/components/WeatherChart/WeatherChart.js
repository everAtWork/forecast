import { HorizontalBar } from "react-chartjs-2";
function WeatherChart() {
  return (
    <HorizontalBar
      data={{
        labels: ["Friday", "Saturday", "Sunday", "Monday", "Tuesday"]
      }}
    />
  );
}

// сначала чарт, потом допилим лейблы через moment
export default WeatherChart;
