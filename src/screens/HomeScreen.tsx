import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
// import {useSelector} from 'react-redux';
// import {AplicationState} from '../redux/reducers';
import Icon from 'react-native-vector-icons/Ionicons';
import coinApi from '../api/coinApi/coinApi';
import {ICoin} from '../interfaces/coinApi';
import CoinList from '../components/CoinList';

const HomeScreen = () => {
  const [state, setstate] = useState<ICoin[]>([]);
  const coin: ICoin = {
    id: 'bitcoin',
    symbol: 'btc',
    name: 'Bitcoin',
    image:
      'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
    current_price: 56518,
    market_cap: 1068196564106,
    market_cap_rank: 1,
    fully_diluted_valuation: 1190495548177,
    total_volume: 40298362775,
    high_24h: 56751,
    low_24h: 54409,
    price_change_24h: 33.42,
    price_change_percentage_24h: 0.05916,
    market_cap_change_24h: 3143904303,
    market_cap_change_percentage_24h: 0.29519,
    circulating_supply: 18842681.0,
    total_supply: 21000000.0,
    max_supply: 21000000.0,
    ath: 64805,
    ath_change_percentage: -12.79517,
    ath_date: '2021-04-14T11:54:46.763Z',
    atl: 67.81,
    atl_change_percentage: 83241.22135,
    atl_date: '2013-07-06T00:00:00.000Z',
    roi: null,
    last_updated: '2021-10-13T15:31:04.584Z',
    price_change_percentage_1h_in_currency: 1.9310751969380182,
    price_change_percentage_24h_in_currency: 0.059162548735127815,
  };

  // const theme = useSelector(
  //   (state: AplicationState) => state.themeReducer.theme,
  // );

  // useEffect(() => {
  //   const getCoin = async () => {
  //     try {
  //       const coins = (await coinApi.get<ICoinList[]>('/v1/assets')).data;
  //       console.log('--- 18 coins --- ', typeof coins);
  //       setstate(coins);
  //     } catch (error) {
  //       console.log('--- 21 error --- ', error);
  //     }
  //   };

  //   getCoin();
  // }, []);

  return (
    console.log(
      '--- 30 JSON.stringify(state[0], null, 5) --- ',
      JSON.stringify(state[0], null, 5),
    ),
    console.log(
      '--- 30 JSON.stringify(state[0], null, 5) --- ',
      JSON.stringify(state[1], null, 5),
    ),
    (
      <View>
        <CoinList coinList={[coin]} />
        {state.length > 0 && <Text>{JSON.stringify(state[0], null, 5)}</Text>}
      </View>
    )
  );
};

export default HomeScreen;
