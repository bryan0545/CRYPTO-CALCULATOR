import { CoinListState, initialState } from "./coinListState";
import { CoinListActions } from "./coinListActions";

const coinListReducer = (
  state: CoinListState = initialState,
  action: CoinListActions
): CoinListState => {
  switch (action.type) {
    case "SET_COINLIST":
      return {
        ...state,
        error: false,
        loading: false,
        coinList: action.payload,
      };
    case "SET_COINLIST_LOADING":
      console.log("--- 17  --- ", state.loading);
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "SET_COINLIST_ERROR":
      return {
        ...state,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
};

export default coinListReducer;
