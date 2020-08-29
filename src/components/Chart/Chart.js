import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import "./chart.css";
function Chart({ data, country }) {
  const [dailyData, setDailyData] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchAPI();
  });
  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "forestgreen",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "deaths",
            borderColor: "red",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  const barChart = data.confirmed ? (
    <Bar
      data={{
        labels: ["infected", "recovered", "deaths"],
        datasets: [
          {
            label: "people",
            backgroundColor: ["rgb(81, 130, 255)", "forestgreen", "red"],
            data: [
              data.confirmed.value,
              data.recovered.value,
              data.deaths.value,
            ],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `current situation in ${country}` },
      }}
    />
  ) : null;
  return <div className="container1">{country ? barChart : lineChart}</div>;
}
export default Chart;
