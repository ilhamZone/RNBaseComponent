import React, { memo } from "react";
import { View } from "react-native";
import { COLORS } from "../../../configs";
import {
  Ic24CheckCircleBlue,
  Ic24Info,
  Ic24InfoDanger,
  Ic24InfoWarning,
} from "../../../configs/svgs";
import Text from "../Text";

import styles from "./styles";

interface Props {
  type: "info" | "warning" | "danger" | "success";
  label: string;
}

const Ribbon = ({ type, label }: Props) => {
  const _handleBackgroundRibbon = () => {
    if (type === "info") {
      return { background: "#EFF7FF", text: COLORS.black1D };
    }
    if (type === "warning") {
      return { background: "#FFF7D7", text: "#998122" };
    }
    if (type === "danger") {
      return { background: "#FEE6E9", text: "#D92037" };
    }
    return { background: "#E3FCE5", text: "#019859" };
  };

  const _handleIconRibbon = () => {
    if (type === "info") {
      return <Ic24CheckCircleBlue />;
    }
    if (type === "warning") {
      return <Ic24InfoWarning />;
    }
    if (type === "danger") {
      return <Ic24InfoDanger />;
    }
    return <Ic24Info />;
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: _handleBackgroundRibbon().background,
        },
      ]}
    >
      <View style={styles.content}>
        {_handleIconRibbon()}
        <Text style={[styles.label, { color: _handleBackgroundRibbon().text }]}>
          {label}
        </Text>
      </View>
    </View>
  );
};

export default memo(Ribbon);
