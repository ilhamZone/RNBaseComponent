import React from "react";
import { ViewStyle } from "react-native";
import Slider from "@react-native-community/slider";

import { COLORS } from "../../../configs";
import Text from "../Text";

interface Props {
  min: number;
  max: number;
  onValueChanged: (e: number) => void;
  errorMessage?: any;
  label?: string;
  style?: ViewStyle | ViewStyle[];
  withRange?: boolean;
  value: number;
}

const Component = ({
  label,
  errorMessage,
  min,
  max,
  onValueChanged,
}: Props) => {
  return (
    <>
      {label ? <Text style={{ marginBottom: 2 }}>{label}</Text> : null}
      <Slider
        style={{ width: "100%", height: 40 }}
        minimumValue={min}
        maximumValue={max}
        minimumTrackTintColor={COLORS.black1D}
        maximumTrackTintColor={COLORS.greyA5}
        onValueChange={onValueChanged}
        step={1}
      />
      {errorMessage ? (
        <Text
          style={{ marginTop: 2 }}
          size={12}
          color={COLORS.dangerBase}
          textAlign="left"
        >
          {errorMessage}
        </Text>
      ) : null}
    </>
  );
};

Component.defaultProps = {
  min: 0,
  max: 100,
};

export default Component;
