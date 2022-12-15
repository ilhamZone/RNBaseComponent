import React, { ReactNode, memo } from "react";
import {
  StatusBar,
  View,
  ViewStyle,
  SafeAreaView as SafeAreaViewNative,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../../configs";
import styles from "./styles";

interface Props {
  style?: ViewStyle | ViewStyle[];
  children?: ReactNode;
  translucent: boolean;
  barStyle: "dark-content" | "light-content";
  statusBarColor: string;
}

const Component = ({
  style,
  children,
  translucent,
  barStyle,
  statusBarColor,
}: Props) => {
  if (translucent) {
    return (
      <SafeAreaView style={styles.container} edges={["bottom"]}>
        <StatusBar
          barStyle={barStyle}
          translucent={true}
          backgroundColor="transparent"
        />
        <View style={[styles.container, style]}>{children}</View>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaViewNative style={styles.container}>
      <StatusBar
        barStyle={barStyle}
        translucent={false}
        backgroundColor={statusBarColor}
      />
      <View style={[styles.container, style]}>{children}</View>
    </SafeAreaViewNative>
  );
};

Component.defaultProps = {
  translucent: false,
  barStyle: "dark-content",
  statusBarColor: COLORS.white,
};

export default memo(Component);
