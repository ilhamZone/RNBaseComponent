import React, { memo } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { COLORS } from "../../../configs";
import { Ic24SearchBlue, IconClose } from "../../../configs/svgs";
import Text from "../Text";
import styles from "./styles";

interface Props {
  value: string;
  placeholder: string;
  cancelLabel: string;
  onChangeText?: (e: string) => void;
  onCancel?: () => void;
  onClear?: () => void;
}
const Component = ({
  value,
  placeholder,
  cancelLabel,
  onChangeText,
  onCancel,
  onClear,
}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapInput}>
        <Ic24SearchBlue />
        <TextInput
          placeholder={placeholder}
          style={styles.inputStyle}
          selectionColor={COLORS.black1D}
          placeholderTextColor={COLORS.greyA5}
          onChangeText={onChangeText}
          value={value}
        />
        {value && onClear && (
          <TouchableOpacity activeOpacity={0.5} onPress={onClear}>
            <IconClose
              stroke={COLORS.grey86}
              height={16}
              width={16}
              strokeWidth={3}
            />
          </TouchableOpacity>
        )}
      </View>
      {onCancel && (
        <TouchableOpacity onPress={onCancel} style={{ marginLeft: 12 }}>
          <Text color={COLORS.blue00} size={14}>
            {cancelLabel}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
Component.defaultProps = {
  placeholder: "Search something..",
  value: "",
  cancelLabel: "Batal",
};

export default memo(Component);
