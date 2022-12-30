import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import Home from "../screens/Home";

const { Navigator, Screen } = createStackNavigator();

const Stack = () => {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{ ...TransitionPresets.SlideFromRightIOS }}
    >
      <Screen name="Home" component={Home} options={{ header: () => null }} />
    </Navigator>
  );
};

export default Stack;
