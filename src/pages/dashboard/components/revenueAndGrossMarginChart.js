import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import OAChartWrapper from "../../../common/components/oaChartWrapper";
import OAColumnLineChart from "../../../common/components/oaColumnLineChart";
import useReduxRevenue from "../../../redux/revenue/useReduxRevenue";
import useReduxGrossMargin from "../../../redux/grossMargin/useReduxGrossMargin";
import {
  mergeTwoArray,
  getDateFormatedData,
  getMaxValue,
} from "../../../utils/util";
import OAColumnLineChartSkeleton from "../../../common/components/oaColumnLineChartSkeleton";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: "45%",

    [theme.breakpoints.down("xs")]: {
      paddingBottom: "100%",
    },
  },
}));

const RevenueAndGrossMarginChart = () => {
  const classes = useStyles();
  const {
    revenue,
    query: revenueQuery,
    loading: revenueLoading,
    getRevenueData,
  } = useReduxRevenue();
  const {
    grossMargin,
    query: grossMarginQuery,
    loading: grossMarginLoading,
    getGrossMarginData,
  } = useReduxGrossMargin();
  // const grossMarginLoading = false;
  const title = "Revenue & Gross Margin";
  const xUnit = "month";
  const yColumUnit = "revenue";
  const yLineUnit = "gross margin";

  useEffect(() => {
    getRevenueData();
    getGrossMarginData();
  }, []);

  const chartData = mergeTwoArray(
    getDateFormatedData("revenue", revenue, revenueQuery),
    getDateFormatedData("gross margin", grossMargin, grossMarginQuery)
  );

  const columnMaxValue = getMaxValue(revenue, revenueQuery.measures[0]);
  const lineMaxValue = getMaxValue(grossMargin, grossMarginQuery.measures[0]);

  return (
    <OAChartWrapper className={classes.root}>
      {(revenueLoading || grossMarginLoading) && <OAColumnLineChartSkeleton />}
      {!(revenueLoading || grossMarginLoading) && (
        <OAColumnLineChart
          data={chartData}
          title={title}
          xUnit={xUnit}
          yColumUnit={yColumUnit}
          yLineUnit={yLineUnit}
          columnLimit={columnMaxValue}
          lineLimit={lineMaxValue}
        />
      )}
    </OAChartWrapper>
  );
};

export default RevenueAndGrossMarginChart;
