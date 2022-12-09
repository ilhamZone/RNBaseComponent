import React, { memo } from "react";
import { View } from "react-native";

//  import styles from "./styles";

interface Props {
  height: number;
  width: number;
}

const Component = ({ width, height }: Props) => (
  <View style={{ height, width }} />
);

Component.defaultProps = {
  height: 0,
  width: 0,
};

export default memo(Component);
