import { ICoin } from "../../interfaces/coinApi";

export interface CoinListState {
  coinList: ICoin[];
  loading: boolean;
  error: boolean;
}

export const initialState: CoinListState = {
  coinList: [],
  loading: false,
  error: false,
};
