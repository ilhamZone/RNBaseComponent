import React, { memo } from "react";
import {
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS } from "../../../configs";
import { IconMinusSm, IconPlusSm } from "../../../configs/svgs";
import Space from "../Space";
import Text from "../Text";

import styles from "./styles";

interface Props {
  iconMenu: ImageSourcePropType | undefined;
  iconSize: number;
  label: string;
  labelSize: number;
  topIcon: "plus" | "minus" | undefined;
  topIconSize: number;
  onPress?: () => void;
  onPressTopIcon?: () => void;
}

const Component = ({
  iconSize,
  label,
  labelSize,
  topIcon,
  iconMenu,
  topIconSize,
  onPress,
  onPressTopIcon,
}: Props) => {
  const _renderTopIcon = () => {
    if (topIcon === "minus") {
      return (
        <TouchableOpacity
          onPress={onPressTopIcon}
          activeOpacity={0.8}
          style={[styles.btnIcon, { backgroundColor: COLORS.dangerBase }]}
        >
          <IconMinusSm height={topIconSize} width={topIconSize} />
        </TouchableOpacity>
      );
    }
    if (topIcon === "plus") {
      return (
        <TouchableOpacity
          onPress={onPressTopIcon}
          activeOpacity={0.8}
          style={[styles.btnIcon, { backgroundColor: COLORS.succesBase }]}
        >
          <IconPlusSm height={topIconSize} width={topIconSize} />
        </TouchableOpacity>
      );
    }
    return <></>;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      activeOpacity={0.8}
    >
      <View style={styles.wrapIcon}>
        {iconMenu ? (
          <Image
            source={iconMenu}
            style={{ height: iconSize, width: iconSize }}
          />
        ) : (
          <View style={styles.emptyIcon} />
        )}
        {_renderTopIcon()}
      </View>
      <Space height={4} />
      <Text textAlign="center" size={labelSize}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

Component.defaultProps = {
  labelSize: 12,
  topIconSize: 18,
  iconSize: 56,
  label: "Matematika",
  topIcon: undefined,
};

export default memo(Component);
