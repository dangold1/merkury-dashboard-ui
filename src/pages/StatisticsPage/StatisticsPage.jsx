import React, { Fragment, useEffect } from "react";
import LineChartComponent from "../../components/Charts/LineChartComponent/LineChartComponent";
import PieChartComponent from "../../components/Charts/PieChartComponent/PieChartComponent";
import { mapSalesData } from "../../services/sales.service";
import { isEmpty } from "lodash";
import {
  LoadingComponent,
  ErrorComponent,
} from "../../components/ExceptionComponents/ExceptionComponents";
import { useDashboardContext } from "../../context/dashboard.context";
import {
  loadStatisticsDataAction,
  setStatisticsDataAction,
} from "../../actions/statistics.actions";
import { fetchStatisticsData } from "../../services/statistics.service";
import "./StatisticsPage.css";

const StatisticsPage = () => {

  const { dashboardState, dispatch } = useDashboardContext();
  const { data, error, isLoading } = dashboardState.statisticsData;

  const didMount = async () => {
    await dispatch(loadStatisticsDataAction());
    const actionData = await fetchStatisticsData();
    await dispatch(setStatisticsDataAction(actionData));
  };

  useEffect(() => {
    didMount();
  }, []);

  if (isLoading) {
    return <LoadingComponent />;
  }

  if (error || isEmpty(data) && !isLoading) {
    return (
      <ErrorComponent message="Had a network error, please try again later" />
    );
  }

  const { series, labels } = mapSalesData(data.sales);

  return (
    <Fragment>
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

    </Fragment>
  );
};

export default StatisticsPage;
