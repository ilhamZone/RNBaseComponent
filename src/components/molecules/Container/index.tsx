import React, { ReactNode, memo } from "react";
import { SafeAreaView, View, ViewStyle } from "react-native";

import styles from "./styles";

interface Props {
  style?: ViewStyle | ViewStyle[];
  children?: ReactNode;
}

const Component = ({ style, children }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.container, style]}>{children}</View>
    </SafeAreaView>
  );
};

export default memo(Component);
