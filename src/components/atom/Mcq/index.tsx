import React, { memo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../../configs";
import { IconCheck } from "../../../configs/svgs";
import styles from "./styles";

interface Props {
  onPress?: () => void;
  type?: "NeutralWhite" | "Danger" | "Success" | "Neutral20" | "Orange";
  color: string;
  size: number;
  opacity: number;
  textAlign: "left" | "center" | "right";
}
const Component = ({ onPress, type }: Props) => {
  const _type = () => {
    if (type === "NeutralWhite") {
      return COLORS.NeutralWhite;
    }
    if (type === "Success") {
      return COLORS.Success;
    }
    if (type === "Danger") {
      return COLORS.Danger;
    }
    if (type === "Neutral20") {
      return COLORS.Neutral20;
    }
    return COLORS.Orange;
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: `${_type()}`,
            borderColor: `${_type()}`,
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
  type: "Succes",
  color: COLORS.Success,
  size: 16,
  opacity: 1,
  textAlign: "left",
};
export default memo(Component);
