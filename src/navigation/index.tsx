import React from "react";
import { Platform, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RNBootSplash from "react-native-bootsplash";

import Stack from "./Stack";

const Navigation = () => {
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide({ fade: true })}>
      {Platform.OS === "ios" && <StatusBar barStyle="dark-content" />}
      <Stack />
    </NavigationContainer>
  );
};

export default Navigation;
