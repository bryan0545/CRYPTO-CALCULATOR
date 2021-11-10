import * as React from "react";
import Navigator from "./src/navigator/Navigator";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import AppContainer from "./src/components/AppContainer";
import { Text } from "react-native";

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer>
        <Navigator />
      </AppContainer>
    </Provider>
  );
}
