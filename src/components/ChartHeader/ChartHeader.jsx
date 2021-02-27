import React from "react";
import "./ChartHeader.css";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { IconButton } from "@material-ui/core";

const ChartHeader = ({ type }) => {
  return (
    <div className="chart-header">
      <div className="text-header">{type}</div>
      <button className="btn">
        <span className="btn-text">Period: </span>
        <span className="period-text">Last Year</span>
        <IconButton>
          <ArrowDropDownIcon />
        </IconButton>
      </button>
    </div>
  );
};

export default ChartHeader;
