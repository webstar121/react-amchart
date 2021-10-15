import { useDispatch, useSelector } from "react-redux";
import { getRevenue } from "../slices/revenue.slice";

const query = {
  measures: ["IncomeStatementMeasures.grossProfit"],
  timeDimensions: [
    {
      dimension: "IncomeStatementMeasures.accountingPeriodEndDate",
      dateRange: ["2019-11-30", "2020-10-31"],
      granularity: "month",
    },
  ],
  filters: [],
  order: {},
};

function useReduxRevenue() {
  const dispatch = useDispatch();
  const { revenue, loading } = useSelector((state) => state.revenue);

  const getRevenueDataWrapper = async () => {
    await dispatch(getRevenue(query));
  };

  return {
    revenue,
    loading,
    query,
    getRevenueData: getRevenueDataWrapper,
  };
}

export default useReduxRevenue;
