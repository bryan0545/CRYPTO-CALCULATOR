import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ICoin } from "../interfaces/coinApi";
import CoinItem from "./CoinItem";

interface IProps {
  coinList: ICoin[];
}

const CoinList = ({ coinList }: IProps) => {
  return (
    <View style={styles.container}>
      {coinList.map((coin) => (
        <CoinItem key={coin.id} coin={coin} />
      ))}
    </View>
  );
};

export default CoinList;

const styles = StyleSheet.create({
  container: {},
});
