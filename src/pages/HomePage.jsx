import React, { Fragment, useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import LineChartComponent from "../components/Charts/LineChartComponent";
import PieChartComponent from "../components/Charts/PieChartComponent";
import { Grid, Paper } from "@material-ui/core";
import NotesList from "../components/NotesList/NotesList";
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
  borderPaper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    border: "1px solid #e8ebf0",
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const { data, error, isLoading } = useFetch("data/home.json");

  if (isLoading) {
    return <LoadingComponent />;
  }

  if ((error || isEmpty(data)) && !isLoading) {
    return (
      <ErrorComponent message="Had a network error, please try again later" />
    );
  }

  const { sales, tasks, messages, activity } = data;
  const { series, labels } = mapSalesData(sales);

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
          <Paper className={fixedHeightPaper}>
            {/* LineChart */}
            <LineChartComponent data={data.report} />
          </Paper>
        </Grid>
      </Grid>

      {/* Notes Lists */}
      <Grid container spacing={5}>
        <Grid item xs={12} md={4} lg={4}>
          <div className="note-wrapper">
            <NotesList
              type="Task"
              data={tasks}
              isDelay
              isHideButtons
              isHideContextMenu={false}
              isDateNextToName={false}
              isMessage={false}
              isDisplayTimeIcon
              isActivity={false}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <div className="note-wrapper">
            <NotesList
              type="Messages"
              data={messages}
              isDelay={false}
              isHideButtons={false}
              isHideContextMenu
              isDateNextToName
              isMessage
              isDisplayTimeIcon={false}
              isActivity={false}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <div className="note-wrapper">
            <NotesList
              type="Activity"
              data={activity}
              isDelay={false}
              isHideButtons
              isHideContextMenu
              isDateNextToName={false}
              isMessage
              isDisplayTimeIcon
              isActivity
            />
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default HomePage;
