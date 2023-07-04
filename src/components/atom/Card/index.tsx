import React, { memo, ReactNode } from "react";
import { View, ViewStyle } from "react-native";

import styles from "./styles";

interface Props {
  children: ReactNode;
  style?: ViewStyle | ViewStyle[];
}

const Card = ({ children, style }: Props) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.containerChildren}>{children}</View>
    </View>
  );
};

export default memo(Card);
