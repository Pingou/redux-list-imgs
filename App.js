import React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import configureStore from "./app/store/configureStore";
import { AppNavigator } from "./app/config/AppNavigator";

class App extends React.Component {
  store = configureStore();

  render() {
    return (
      <Provider store={this.store}>
        <AppNavigator />
      </Provider>
    );
  }
}

AppRegistry.registerComponent("App", () => App);

export default App;
