import React, { ReactNode, memo } from "react";
import { Text, TextStyle } from "react-native";

import { COLORS, FONTS } from "../../../configs";

interface Props {
  children: ReactNode;
  style?: TextStyle | TextStyle[];
  numberOfLines?: number | undefined;
  onPress?: () => void;
  type?: "light" | "reguler" | "semibold" | "bold" | "extrabold";
  color: string;
  size: number;
  opacity: number;
  lineHeight?: number;
  textAlign: "left" | "center" | "right";
  onTextLayout?: (e: any) => void;
}

const Component = ({
  style,
  children,
  numberOfLines,
  onPress,
  type,
  color,
  size,
  opacity,
  lineHeight,
  textAlign,
  onTextLayout,
}: Props) => {
  const _type = () => {
    if (type === "light") {
      return FONTS.light;
    }
    if (type === "semibold") {
      return FONTS.semiBold;
    }
    if (type === "bold") {
      return FONTS.bold;
    }
    if (type === "extrabold") {
      return FONTS.extraBold;
    }
    return FONTS.regular;
  };

  return (
    <Text
      onTextLayout={onTextLayout}
      style={[
        {
          fontFamily: `${_type()}`,
          color,
          fontSize: size,
          opacity,
          lineHeight,
          textAlign,
        },
        style,
      ]}
      numberOfLines={numberOfLines}
      onPress={onPress}
    >
      {children}
    </Text>
  );
};

Component.defaultProps = {
  type: "reguler",
  color: COLORS.black1D,
  size: 16,
  opacity: 1,
  textAlign: "left",
};

export default memo(Component);
