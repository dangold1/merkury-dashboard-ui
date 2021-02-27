import React, { Fragment } from "react";
import {
  LineChart,
  Line,
  YAxis,
  Label,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import ChartHeader from "../../ChartHeader/ChartHeader";
import "./LineChartComponent.css";

const LineChartComponent = (props) => {
  return (
    <Fragment>
      <ChartHeader type="Report" />
      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          data={props.data}
          width={300}
          height={300}
        >
          <YAxis stroke="#8492af">
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: "middle",
                fill: "#5584ff",
              }}
            ></Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke="#5584ff" dot={false} />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </Fragment>
  );
};

LineChartComponent.defaultProps = {
  data: [],
};

export default LineChartComponent;
