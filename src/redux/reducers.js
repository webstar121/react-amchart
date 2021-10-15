import { combineReducers } from "redux";
import grossMarginReducer from "./slices/grossMargin.slice";
import revenueReducer from "./slices/revenue.slice";

const rootReducer = combineReducers({
  revenue: revenueReducer,
  grossMargin: grossMarginReducer,
});

export default rootReducer;
