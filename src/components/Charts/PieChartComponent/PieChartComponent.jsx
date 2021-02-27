import React, { useState } from "react";
import Chart from "react-apexcharts";
import ChartHeader from "../../ChartHeader/ChartHeader";
import useCheckMobileScreen from "../../../hooks/useCheckMobileScreen";

const getOptions = (labels) => ({
  chart: { type: "donut" },
  colors: ["#25396e", "#5584ff", "#4b74e0", "#4164c2", "#3755a4"],
  labels,
  dataLabels: { enabled: false },
  stroke: { width: 0 },
  plotOptions: {
    pie: {
      donut: {
        size: "50%",
        background: "transparent",
        labels: {
          show: true,
          total: {
            show: true,
            showAlways: true,
            label: "Sales",
            formatter: (w) => {
              return w.globals.seriesTotals.reduce((a, b) => {
                return a + b;
              }, 0);
            },
          },
        },
      },
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: "bottom",
        },
      },
    },
  ],
});

const PieChartComponent = (props) => {
  const isMobileMode = useCheckMobileScreen();
  const [options] = useState(getOptions(props.labels));
  return (
    <div id="chart">
      <ChartHeader type="Your Sales" />
      <Chart
        options={options}
        series={props.series}
        type="donut"
        width={isMobileMode ? 200 : 325}
        height={isMobileMode ? 250 : 180}
      />
    </div>
  );
};

PieChartComponent.defaultProps = {
  series: [],
  labels: [],
};

export default PieChartComponent;
