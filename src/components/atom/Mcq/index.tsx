import React, { memo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../../configs";
import { IconCheck } from "../../../configs/svgs";
import styles from "./styles";

interface Props {
  onPress?: () => void;
  type?: "Default" | "Correct" | "Wrong" | "Disable" | "Selected";
  color: string;
  bordercolor: string;
  size: number;
  opacity: number;
  textAlign: "left" | "center" | "right";
}
const Component = ({ onPress, type }: Props) => {
  const _type = () => {
    if (type === "Default") {
      return { bgColor: COLORS.neutralWhite, borderColor: COLORS.neutralWhite };
    }
    if (type === "Wrong") {
      return { bgColor: COLORS.success, borderColor: COLORS.succesLight2 };
    }
    if (type === "Correct") {
      return { bgColor: COLORS.danger, borderColor: COLORS.dangerBase };
    }
    if (type === "Disable") {
      return { bgColor: COLORS.neutral20, borderColor: COLORS.neutral20 };
    }
    return { bgColor: COLORS.orange, borderColor: COLORS.orangeBase };
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: `${_type().bgColor}`,
            borderColor: `${_type().borderColor}`,
          },
        ]}
        activeOpacity={0.6}
        onPress={onPress}
      >
        <Text style={{ flex: 1 }}>A. Answer</Text>
        <IconCheck height={15} width={15} />
      </TouchableOpacity>
    </View>
  );
};
Component.defaultProps = {
  type: "Default",
  color: COLORS.success,
  bordercolor: COLORS.succesLight2,
  size: 16,
  opacity: 1,
  textAlign: "left",
};
export default memo(Component);
