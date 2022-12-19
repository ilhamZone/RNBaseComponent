import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import Login from "../screens/Login";
import Home from "../screens/Home";
import Intro from "../screens/Intro";
import HomeNavigation from "./Home";

const { Navigator, Screen } = createStackNavigator();

const Stack = () => {
  return (
    <Navigator
      initialRouteName="Intro"
      screenOptions={{ ...TransitionPresets.SlideFromRightIOS }}
    >
      <Screen name="Intro" component={Intro} options={{ header: () => null }} />
      <Screen
        name="HomeNavigation"
        component={HomeNavigation}
        options={{ header: () => null }}
      />
      <Screen name="Login" component={Login} options={{ header: () => null }} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};

export default Stack;
