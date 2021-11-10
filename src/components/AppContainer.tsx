import React, { ReactNode, useEffect } from "react";
import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import useCoinList from "../hooks/useCoinList";
import { AplicationState } from "../redux/reducers";
import { getCoinList } from "../redux/reduxCoinList/coinListActions";

interface IProps {
  children: ReactNode;
}

const AppContainer = (props: any) => {
  const dispatch = useDispatch();
  const GETCOINLIST = () => dispatch(getCoinList());

  const { coinList } = useSelector(
    (state: AplicationState) => state.coinListReducer
  );

  useEffect(() => {
    if (!coinList.length) {
      console.log("--- 21 entro --- ");
      GETCOINLIST();
    }
  }, []);

  return <View style={{ flex: 1 }}>{props.children}</View>;
};

export default AppContainer;
