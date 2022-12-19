import React, { memo } from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "../../../configs";
import { Check } from "../../../configs/svgs";
import Text from "../Text";
import styles from "./styles";

interface Props {
  checked: boolean;
  onPress?: () => void;
  title?: string;
  type: "small" | "medium";
  checkedColor: string;
  titleSize: number;
  disabled: boolean;
}

const Component = ({
  checked,
  onPress,
  title,
  type,
  checkedColor,
  titleSize,
  disabled,
}: Props) => {
  const _type = () => {
    if (type === "small") {
      return { size: 20, iconSize: 13 };
    }
    return { size: 24, iconSize: 15 };
  };

  const _isChecked = () => {
    if (checked && disabled) {
      return COLORS.greyCE;
    }
    if (checked) {
      return checkedColor;
    }
    return "transparent";
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={onPress}
      disabled={disabled}
    >
      <View
        style={[
          styles.wrapIcon,
          {
            backgroundColor: _isChecked(),
            height: _type().size,
            width: _type().size,
            borderWidth: !checked ? 1.5 : 0,
            borderColor: disabled ? COLORS.greyCE : COLORS.greyA5,
          },
        ]}
      >
        <Check
          stroke={checked ? COLORS.white : "transparent"}
          width={_type().iconSize}
          height={_type().iconSize}
        />
      </View>
      {title ? (
        <Text style={{ marginLeft: 8 }} size={titleSize}>
          {title}
        </Text>
      ) : (
        <></>
      )}
    </TouchableOpacity>
  );
};

Component.defaultProps = {
  checked: false,
  title: "",
  type: "medium",
  checkedColor: COLORS.blue00,
  titleSize: 16,
  disabled: false,
};

export default memo(Component);
