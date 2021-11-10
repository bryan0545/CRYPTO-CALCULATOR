import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { AplicationState } from "../redux/reducers";
import Icon from "react-native-vector-icons/Ionicons";
import coinApi from "../api/coinApi/coinApi";
import { ICoin } from "../interfaces/coinApi";
import CoinList from "../components/CoinList";
import useCoinList from "../hooks/useCoinList";
import { useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const { coinList, loading } = useSelector(
    (state: AplicationState) => state.coinListReducer
  );

  const newArray = coinList.slice(0, 10);

  return (
    console.log("--- 18 newArray --- ", newArray),
    (
      <View style={{ flex: 1, marginTop: 50 }}>
        {loading && <ActivityIndicator size={30} color="#5856D6" />}
        {newArray.length > 0 && <CoinList coinList={newArray} />}
      </View>
    )
  );
};

export default HomeScreen;
