import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ICoin } from "../interfaces/coinApi";
import Icon from "react-native-vector-icons/Ionicons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface IProps {
  coin: ICoin;
}

const CoinItem = ({ coin }: IProps) => {
  console.log("--- 8 coin --- ", coin);
  return (
    <View style={{ flexDirection: "row" }}>
      <View>
        <Icon name="star-outline" size={hp(4)} color="#900" />
      </View>
      <View>
        <Image source={{ uri: coin.image }} style={styles.tinyLogo} />
      </View>
      <View>
        <Text>{coin.symbol}</Text>
        <Text>{coin.name}</Text>
      </View>
      <View>
        <Text>{coin.current_price}</Text>
      </View>
      <View>
        <Text> 1h: {coin.price_change_percentage_1h_in_currency}</Text>
        <Text> 24h: {coin.price_change_percentage_24h_in_currency}</Text>
      </View>
    </View>
  );
};

export default CoinItem;

const styles = StyleSheet.create({
  tinyLogo: {
    resizeMode: "contain",
    width: wp(8),
    height: hp(4),
  },
});
