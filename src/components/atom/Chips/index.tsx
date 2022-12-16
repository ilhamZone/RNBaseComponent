import React, { memo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../../configs";
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
    | "light-green";
  opacity: number;
  textAlign: "left" | "center" | "right";
}
const Component = ({ onPress, type }: Props) => {
  const _type = () => {
    if (type === "light-gray") {
      // return COLORS.NeutralWhite;
     return { bgColor: COLORS.N eutral10, textColor: COLORS.Neutral80 };
    }
    if (type === "light-blue") {
      // return COLORS.Success;
      return { bgColor: COLORS.primaryLight3, textColor: COLORS.primaryBase };
    }
    if (type === "solid-black") {
      // return COLORS.Danger;
      return { bgColor: COLORS.Neutral80, textColor: COLORS.NeutralWhite };
    }
    if (type === "solid-blue") {
      return { bgColor: COLORS.primaryBase, textColor: COLORS.NeutralWhite };
    }
    if (type === "light-yellow") {
      return { bgColor: COLORS.secondaryLight, textColor: COLORS.orangeDark };
    }
    if (type === "light-red") {
      return { bgColor: COLORS.Danger, textColor: COLORS.dangerBase };
    }
    return { bgColor: COLORS.successLight2, textColor: COLORS.successBase };
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: `${_type().bgColor}`,
          },
        ]}
        activeOpacity={0.6}
        onPress={onPress}
      >
        <Text style={{ flex: 1, fontSize: 14, color: `${_type().textColor}` }}>
          Label
        </Text>
      </TouchableOpacity>
    </View>
  );
};
Component.defaultProps = {
  type: "Succes",
  color: COLORS.Success,
  icon: "default",
  size: 16,
  opacity: 1,
  textAlign: "left",
};
export default memo(Component);
