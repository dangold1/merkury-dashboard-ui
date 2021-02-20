import React, { Fragment } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import LineChartComponent from "../components/Charts/LineChartComponent";
import PieChartComponent from "../components/Charts/PieChartComponent";
import { Grid, Paper } from "@material-ui/core";
import useFetch from "../hooks/useFetch";
import { mapSalesData } from "../services/sales.service";
import { isEmpty } from "lodash";
import {
  LoadingComponent,
  ErrorComponent,
} from "../components/ExceptionComponents/ExceptionComponents";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

const StatisticsPage = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const { data, error, isLoading } = useFetch("data/statistics.json");

  if (isLoading) {
    return <LoadingComponent />;
  }

  if (error || isEmpty(data)) {
    return (
      <ErrorComponent message="Had a network error, please try again later" />
    );
  }

  const { series, labels } = mapSalesData(data.sales);

  return (
    <Fragment>
      <Grid container spacing={5}>
        <Grid item xs={12} md={5} lg={5}>
          {/* PieChart */}
          <Paper className={fixedHeightPaper}>
            <PieChartComponent series={series} labels={labels} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={7} lg={7}>
          {/* LineChart */}
          <Paper className={fixedHeightPaper}>
            <LineChartComponent data={data.report} />
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default StatisticsPage;
