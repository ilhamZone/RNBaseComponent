import React, { memo, ReactNode, useState } from "react";
import { TextInput, ViewStyle, View } from "react-native";
import { COLORS } from "../../../configs";
import { widthPercent } from "../../../utils/helpers";
import styles from "./styles";

interface Props {
  style?: ViewStyle | ViewStyle[];
  placeHolder?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  error?: boolean;
  success?: boolean;
  inputMessage?: ReactNode;
  value: string;
  onChange: (e: any) => void;
}

const Component = ({
  style,
  placeHolder,
  leftIcon,
  rightIcon,
  inputMessage,
  error,
  success,
}: Props) => {
  const [inputFocus, setInputFocus] = useState(false);

  const handleBorderColor = () => {
    if (success) return COLORS.successLight;
    if (error) return COLORS.dangerBase;
    if (inputFocus) return COLORS.primaryBase;
    return "transparent";
  };

  return (
    <>
      <View
        style={[
          styles.container,
          {
            borderWidth: 1,
            borderColor: handleBorderColor(),
          },
          style,
        ]}
      >
        <View style={styles.iconLeft}>{leftIcon}</View>
        <TextInput
          onFocus={() => setInputFocus(true)}
          onBlur={() => setInputFocus(false)}
          placeholder={placeHolder}
          style={styles.input}
          placeholderTextColor={COLORS.Neeutral50}
        />
        <View style={styles.iconRight}>{rightIcon}</View>
      </View>
      <View style={style}>{inputMessage}</View>
    </>
  );
};

Component.defaultProps = {
  style: {
    width: widthPercent(90),
  },
};

export default memo(Component);
