import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import axios from 'axios';
import {StackScreenProps} from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}

const HomeScreen = ({navigation}: Props) => {
  const [state, setstate] = useState([]);
  console.log('--- 13 state --- ', state);

  useEffect(() => {
    const getCoin = async () => {
      const coins = await (
        await axios.get(
          'https://rest.coinapi.io/v1/assets?apikey=B19A3422-6601-4F4A-A352-F298FF0CE694',
        )
      ).data;
      setstate(coins);
    };

    getCoin();
  }, []);

  return (
    <View>
      <Text>Home screen</Text>
      <Button
        title="go other"
        onPress={() => {
          navigation.navigate('CoinScreen');
        }}
      />
    </View>
  );
};

export default HomeScreen;
