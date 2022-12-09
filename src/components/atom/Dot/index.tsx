import React, { memo } from "react";
import Animated, {
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

import { COLORS } from "../../../configs";

interface Props {
  currentIndex: number;
  index: number;
  color: string;
  size?: number;
}

const Dot = ({ currentIndex, index, size }: Props) => {
  const selectedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor:
        index === Number(currentIndex.toFixed())
          ? withSpring(COLORS.blue00)
          : withSpring(COLORS.greyCE),
    };
  });

  return (
    <Animated.View
      style={[
        {
          height: size || 8,
          width: size || 8,
          borderRadius: 5,
          marginLeft: 4,
          marginRight: 4,
          marginHorizontal: 20,
        },
        selectedStyle,
      ]}
    />
  );
};

Dot.defaultProps = {
  active: false,
  color: COLORS.black1D,
};

export default memo(Dot);
