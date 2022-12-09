import React, { memo } from "react";
import {
  ActivityIndicator,
  Image,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

import { COLORS } from "../../../configs";
import Text from "../Text";

import styles from "./styles";

interface Props {
  borderRadius?: number;
  disabled: boolean;
  isLoading: boolean;
  color?: string;
  onPress?: () => void;
  title: string;
  textColor?: string;
  textWeight: "reguler" | "bold" | "extrabold" | "semibold";
  icon?: any;
  height?: number;
  width?: number;
  textSize?: number;
  style?: ViewStyle | ViewStyle[];
  resizeIcon?: "cover" | "contain" | "stretch" | "repeat" | "center";
  iconSize?: number;
  iconColor?: string;
}

const Component = ({
  title,
  isLoading,
  icon,
  onPress,
  disabled,
  height,
  textSize,
  textWeight,
  borderRadius,
  width,
  style,
  resizeIcon,
  iconColor,
  iconSize,
  textColor,
  color,
}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={disabled || isLoading}
      onPress={onPress}
      style={[
        styles.container,
        {
          height: height || 44,
          width: width || "100%",
          borderRadius: borderRadius || 30,
          backgroundColor: color || COLORS.blue00,
        },
        style,
        disabled && { backgroundColor: COLORS.greyCE },
      ]}
    >
      {isLoading ? (
        <ActivityIndicator size={30} color={COLORS.white} />
      ) : (
        <View style={styles.wrapTitle}>
          {icon && (
            <Image
              resizeMode={resizeIcon}
              source={icon}
              style={[
                styles.icon,
                {
                  tintColor: iconColor || "none",
                  height: iconSize,
                  width: iconSize,
                },
              ]}
            />
          )}
          <Text
            color={disabled ? COLORS.grey86 : textColor}
            type={textWeight}
            size={textSize}
            textAlign="center"
          >
            {title}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

Component.defaultProps = {
  isLoading: false,
  disabled: false,
  textWeight: "semibold",
  resizeIcon: "cover",
  textColor: COLORS.white,
};

export default memo(Component);
