import { Dispatch } from "react";
import { useDispatch } from "react-redux";
import coinApi from "../../api/coinApi/coinApi";
import { ICoin } from "../../interfaces/coinApi";

export type CoinListActions =
  | { type: "SET_COINLIST"; payload: ICoin[] }
  | { type: "SET_COINLIST_LOADING" }
  | { type: "SET_COINLIST_ERROR" };

export const getCoinList = () => {
  return async (dispatch: any) => {
    dispatch(setCoinListLoading());
    try {
      const coins = (
        await coinApi.get<ICoin[]>(
          "/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h"
        )
      ).data;
      dispatch(setCoinList(coins));
    } catch (error) {
      // setCoinListEror();
    }
  };
};

const setCoinListLoading = () => ({
  type: "SET_COINLIST_LOADING",
});

export const setCoinListEror = () => ({
  type: "SET_COINLIST_ERROR",
});

const setCoinList = (coinList: ICoin[]) => ({
  type: "SET_COINLIST",
  payload: coinList,
});
