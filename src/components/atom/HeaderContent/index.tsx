import React, { memo, ReactNode } from "react";
import { ImageBackground, Platform, View, ViewStyle } from "react-native";
import { getStatusBarHeight } from "react-native-safearea-height";
import { COLORS, IMAGES } from "../../../configs";
import { ChevronLeft } from "../../../configs/svgs";
import Space from "../Space";

interface Props {
  children: ReactNode;
  backButton: boolean;
  style?: ViewStyle | ViewStyle[];
}

import styles from "./styles";

const Component = ({ children, backButton, style }: Props) => {
  const statusBarHeight = getStatusBarHeight();
  const isAndroid = Platform.OS === "android" ? 10 : 0;
  return (
    <ImageBackground source={IMAGES.headerLarge} style={styles.container}>
      <Space height={statusBarHeight + isAndroid} />
      {backButton && (
        <ChevronLeft
          stroke={COLORS.blue00}
          height={26}
          width={26}
          style={[styles.backBtn, { top: statusBarHeight + isAndroid + 8 }]}
        />
      )}
      <View style={[{ flex: 1 }, style]}>{children}</View>
      <View style={styles.bottomLine} />
    </ImageBackground>
  );
};

Component.defaultProps = {
  backButton: false,
};

export default memo(Component);
