import { useFocusEffect } from "@react-navigation/native";
import React, { ReactNode, memo } from "react";
import { StatusBar, View, ViewStyle, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getStatusBarHeight } from "react-native-safearea-height";
import { COLORS } from "../../../configs";
import { Space } from "../../atom";
import styles from "./styles";

interface Props {
  style?: ViewStyle | ViewStyle[];
  children?: ReactNode;
  barStyle: "dark-content" | "light-content";
  statusBarColor: string;
  transculent: boolean;
}

const Component = ({
  style,
  children,
  barStyle,
  statusBarColor,
  transculent,
}: Props) => {
  useFocusEffect(
    React.useCallback(() => {
      const setStatusBar = () => {
        if (Platform.OS === "android" && transculent) {
          StatusBar.setBackgroundColor("transparent");
          StatusBar.setBarStyle(barStyle);
        } else if (Platform.OS === "android") {
          StatusBar.setBackgroundColor(statusBarColor);
          StatusBar.setBarStyle(barStyle);
        } else if (Platform.OS === "ios") {
          StatusBar.setBarStyle(barStyle);
        }
      };
      setStatusBar();
      return () => setStatusBar();
    }, [barStyle, statusBarColor])
  );

  const statusBarHeight = getStatusBarHeight();

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      {!transculent ? <Space height={statusBarHeight} /> : <></>}
      <StatusBar
        barStyle={barStyle}
        translucent={true}
        backgroundColor={transculent ? "transparent" : statusBarColor}
      />
      <View style={[styles.container, style]}>{children}</View>
    </SafeAreaView>
  );
};

Component.defaultProps = {
  barStyle: "dark-content",
  statusBarColor: COLORS.white,
  transculent: false,
};

export default memo(Component);
