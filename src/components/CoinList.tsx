import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ICoin} from '../interfaces/coinApi';
import CoinItem from './CoinItem';

interface IProps {
  coinList: ICoin[];
}

const CoinList = ({coinList}: IProps) => {
  return coinList.length > 0 ? (
    <View style={styles.container}>
      {coinList.map(coin => {
        return <CoinItem coin={coin} />;
      })}
    </View>
  ) : (
    <View>
      <Text>No items</Text>
    </View>
  );
};

export default CoinList;

const styles = StyleSheet.create({
  container: {},
});
