import React, { Component } from "react";
import HomeScreen from "./screens/homeScreen";
import StarScreen from "./screens/StarScreen";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const Navigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Star: {
    screen: StarScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const AppContainer = createAppContainer(Navigator);
