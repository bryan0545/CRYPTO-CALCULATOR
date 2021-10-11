import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {AplicationState} from '../redux/reducers';
import {ThemeState} from '../redux/reduxTheme/theme';
import CoinScreen from '../screens/CoinScreen';

const Stack = createStackNavigator();

const Navigator = () => {
  const theme = useSelector(
    (state: AplicationState) => state.themeReducer,
  ) as ThemeState;

  return (
    <View style={{backgroundColor: theme.colors.background, flex: 1}}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="CoinScreen" component={CoinScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Navigator;
