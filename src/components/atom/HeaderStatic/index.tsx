import React, { memo } from "react";
import { getStatusBarHeight } from "react-native-safearea-height";
import { View } from "react-native";
import Text from "../Text";
import styles from "./styles";

interface Props {
  title: string;
}

const Component = ({ title }: Props) => {
  const statusBarHeight = getStatusBarHeight();
  return (
    <View style={[styles.container, { height: statusBarHeight + 52 }]}>
      <Text style={{ flex: 1 }}>icon</Text>
      <Text style={{ flex: 1, textAlign: "center" }}>{title}</Text>
      <View style={{ opacity: 0, flex: 1 }} />
    </View>
  );
};

export default memo(Component);
