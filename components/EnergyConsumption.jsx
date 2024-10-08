import React, { useEffect, useState } from "react";
import { renderChart } from "../utils/chart.js";
import { groupByDay, sortByTime } from "../utils/reading";
import Button from "./Button.jsx";

export const EnergyConsumption = ({ readings }) => {
  const [filteredReadings, setFilteredReadings] = useState([]);
  const containerId = "usageChart";

  useEffect(() => {
    setFilteredReadings(sortByTime(groupByDay(readings)).slice(-30));
  }, [readings]);

  useEffect(() => {
    renderChart(containerId, filteredReadings);
  }, [filteredReadings]);

  const show30DaysConsumption = () => {
    setFilteredReadings(sortByTime(groupByDay(readings)).slice(-30));
  };

  const show7DaysConsumption = () => {
    setFilteredReadings(sortByTime(groupByDay(readings)).slice(-7));
  };

  const showDailyConsumption = () => {
    setFilteredReadings(groupByDay(readings));
  };

  const showHourlyConsumption = () => {
    setFilteredReadings(sortByTime(readings).slice(-24));
  };

  return (
    <>
      <h1 className="regular darkgray line-height-1 mb3">Energy consumption</h1>
      <section className="mb3 flex">
        <Button onClick={show30DaysConsumption}>Last 30 Days</Button>
        <Button onClick={show7DaysConsumption}>Last 7 Days</Button>
        <Button onClick={showDailyConsumption}>Dayly Consumption</Button>
        <Button onClick={showHourlyConsumption}>Hourly Consumption</Button>
      </section>
      <section className="chartHeight mb3">
        <canvas id={containerId} />
      </section>
    </>
  );
};
