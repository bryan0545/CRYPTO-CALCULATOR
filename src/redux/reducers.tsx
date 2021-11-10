import { combineReducers } from "redux";
import themeReducer from "./reduxTheme/themeReducer";
import coinListReducer from "./reduxCoinList/coinListReducer";

const rootReducer = combineReducers({
  themeReducer,
  coinListReducer,
});

export type AplicationState = ReturnType<typeof rootReducer>;

export { rootReducer };
