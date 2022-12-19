import React, { useState, memo } from "react";
import { TouchableOpacity, View } from "react-native";
import { COLORS } from "../../../configs";
import Text from "../Text";
import styles from "./styles";

interface Props {
  onPress?: () => void;
  size?: "small" | "normal" | "big";
  opacity: number;
  textAlign?: "left" | "center" | "right";
}

const Component = ({ size }: Props) => {
  const _size = () => {
    if (size === "small") {
      return { txtsize: 14, height: 32, widht: 60 };
    }
    if (size === "normal") {
      return { txtsize: 16, height: 44, widht: 96 };
    }
    return { txtsize: 20, height: 48, widht: 120 };
  };

  const [active, setActive] = useState(false);
  const onClick = () => {
    setActive(!active);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: active ? COLORS.primaryLight3 : COLORS.blue00,
            height: _size().height,
            width: _size().widht,
          },
        ]}
        activeOpacity={0.6}
        onPress={onClick}
      >
        <Text
          size={_size().txtsize}
          style={[
            styles.texts,
            {
              color: active ? COLORS.neutral80 : COLORS.neutralWhite,
            },
          ]}
        >
          Tabs
        </Text>
      </TouchableOpacity>
    </View>
  );
};
Component.defaultProps = {
  size: "normal",
  opacity: 1,
  textAlign: "left",
};

export default memo(Component);
