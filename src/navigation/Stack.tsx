import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import Login from "../screens/Login";
import Home from "../screens/Home";

const { Navigator, Screen } = createStackNavigator();

const Stack = () => {
  return (
    <Navigator
      initialRouteName="Login"
      screenOptions={{ ...TransitionPresets.SlideFromRightIOS }}
    >
      <Screen name="Login" component={Login} options={{ header: () => null }} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};

export default Stack;
