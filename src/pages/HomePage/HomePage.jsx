import React, { Fragment, useEffect } from "react";
import LineChartComponent from "../../components/Charts/LineChartComponent/LineChartComponent";
import PieChartComponent from "../../components/Charts/PieChartComponent/PieChartComponent";
import NotesList from "../../components/NotesList/NotesList";
import { mapSalesData } from "../../services/sales.service";
import { isEmpty } from "lodash";
import {
  LoadingComponent,
  ErrorComponent,
} from "../../components/ExceptionComponents/ExceptionComponents";
import { useDashboardContext } from "../../context/dashboard.context";
import {
  loadHomeDataAction,
  setHomeDataAction,
} from "../../actions/home.actions";
import { fetchHomeData } from "../../services/home.service";
import "./HomePage.css";

const HomePage = () => {
  const { dashboardState, dispatch } = useDashboardContext();
  const { data, error, isLoading } = dashboardState.homeData;

  const didMount = async () => {
    await dispatch(loadHomeDataAction());
    const actionData = await fetchHomeData();
    await dispatch(setHomeDataAction(actionData));
  };

  useEffect(() => {
    didMount();
  }, []);

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
      <div className="home-header">
        <div className="hello-text">Hello John</div>
      </div>
      <div className="charts-flex-container">
        {/* PieChart */}
        <div className="chart-wrapper">
          <PieChartComponent series={series} labels={labels} />
        </div>
        {/* LineChart */}
        <div className="chart-wrapper">
          <LineChartComponent data={data.report} />
        </div>
      </div>

      {/* Notes Lists */}
      <div className="notes-grid">
        <div className="note-col">
          <NotesList
            type="Tasks"
            data={tasks}
            isDelay
            isHideButtons
            isHideContextMenu={false}
            isMessage={false}
            isDisplayTimeIcon
            isActivity={false}
          />
        </div>
        <div className="note-col">
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
        <div className="note-col">
          <NotesList
            type="Activity"
            data={activity}
            isDelay={false}
            isHideButtons
            isHideContextMenu
            isMessage
            isDisplayTimeIcon
            isActivity
          />
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
