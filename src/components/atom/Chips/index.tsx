import React, { memo } from "react";
import { TouchableOpacity, View } from "react-native";
import { COLORS } from "../../../configs";
import Text from "../Text";
import styles from "./styles";

interface Props {
  onPress?: () => void;
  type?:
    | "light-gray"
    | "light-blue"
    | "solid-black"
    | "solid-blue"
    | "light-yellow"
    | "light-red"
    | "light-green"
    | "light-yellowblue"
    | "solid-warning";
  color: string;
  size?: "14" | "12" | "11";
  opacity: number;
  textAlign: "left" | "center" | "right";
}
const Component = ({ onPress, type, size }: Props) => {
  const _size = () => {
    if (size === "14") {
      return { txtsize: 14, height: 32 };
    }
    if (size === "12") {
      return { txtsize: 12, height: 24 };
    }
    return { txtsize: 11, height: 24 };
  };
  const _type = () => {
    if (type === "light-gray") {
      return { bgColor: COLORS.neutral10, txtColor: COLORS.neutral80 };
    }
    if (type === "light-blue") {
      return { bgColor: COLORS.primaryBase, txtColor: COLORS.primaryBase };
    }
    if (type === "solid-black") {
      return { bgColor: COLORS.neutral80, txtColor: COLORS.neutralWhite };
    }
    if (type === "solid-blue") {
      return { bgColor: COLORS.primaryBase, txtColor: COLORS.neutralWhite };
    }
    if (type === "light-yellow") {
      return { bgColor: COLORS.secondaryLight2, txtColor: COLORS.orangeDark1 };
    }
    if (type === "light-red") {
      return { bgColor: COLORS.dangerLight2, txtColor: COLORS.dangerBase };
    }
    if (type === "light-green") {
      return { bgColor: COLORS.succesLight2, txtColor: COLORS.succesBase };
    }
    if (type === "light-yellowblue") {
      return { bgColor: COLORS.secondaryLight1, txtColor: COLORS.primaryBase };
    }
    return { bgColor: COLORS.warningBase, txtColor: COLORS.neutralWhite };
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: `${_type().bgColor}`,
            height: _size().height,
          },
        ]}
        activeOpacity={0.6}
        onPress={onPress}
      >
        <Text
          size={_size().txtsize}
          color={_type().txtColor}
          style={{
            paddingLeft: 12,
            paddingRight: 12,
            top: 1,
          }}
        >
          Label
        </Text>
      </TouchableOpacity>
    </View>
  );
};
Component.defaultProps = {
  type: "Succes",
  color: COLORS.succesBase,
  size: 14,
  opacity: 1,
  textAlign: "left",
};

export default memo(Component);
