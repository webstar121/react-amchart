import { useDispatch, useSelector } from "react-redux";
import { getGrossMargin } from "../slices/grossMargin.slice";

const query = {
  measures: ["IncomeStatementMeasures.grossMargin"],
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

function useReduxGrossMargin() {
  const dispatch = useDispatch();
  const { grossMargin, loading } = useSelector((state) => state.grossMargin);

  const getDataWrapper = async () => {
    await dispatch(getGrossMargin(query));
  };

  return {
    grossMargin,
    loading,
    query,
    getGrossMarginData: getDataWrapper,
  };
}

export default useReduxGrossMargin;
