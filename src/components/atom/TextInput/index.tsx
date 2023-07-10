import React, { memo, useState } from "react";
import { TextInput, ViewStyle, View } from "react-native";
import { COLORS } from "../../../configs";
import styles from "./styles";
import Text from "../Text";
import { IconEyeInvisible, IconEyeVisible } from "../../../configs/svgs";

interface Props {
  type: "text" | "password" | "textarea" | "number";
  value: string;
  onChange: (e: any) => void;
  style?: ViewStyle | ViewStyle[];
  placeHolder?: string;
  onBlur?: () => void;
  errorMessage?: any;
  label?: string;
}

const Component = ({
  style,
  placeHolder,
  onBlur,
  onChange,
  errorMessage,
  type,
  label,
  value,
}: Props) => {
  const [inputVisible, setInputVisible] = useState(false);

  const renderIconVisible = () => {
    if (type === "password" && inputVisible) {
      return (
        <IconEyeVisible
          width={20}
          height={20}
          style={{ marginRight: 8 }}
          onPress={() => setInputVisible(!inputVisible)}
        />
      );
    }
    if (type === "password" && !inputVisible) {
      return (
        <IconEyeInvisible
          width={20}
          height={20}
          style={{ marginRight: 8 }}
          onPress={() => setInputVisible(!inputVisible)}
        />
      );
    }
    return null;
  };

  return (
    <View>
      {label ? <Text style={{ marginBottom: 2 }}>{label}</Text> : null}
      <View
        style={[
          styles.container,
          {
            borderWidth: 0.5,
            borderColor: COLORS.greyA5,
            borderRadius: 8,
          },
          style,
        ]}
      >
        <TextInput
          onBlur={onBlur}
          placeholder={placeHolder}
          style={[
            styles.input,
            type === "textarea" && { minHeight: 64, maxHeight: 140 },
          ]}
          placeholderTextColor={COLORS.Neeutral50}
          onChangeText={onChange}
          multiline={type === "textarea"}
          secureTextEntry={type === "password" && !inputVisible}
          value={value}
          keyboardType={type === "number" ? "numeric" : "default"}
        />
        {renderIconVisible()}
      </View>
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
    </View>
  );
};

Component.defaultProps = {
  textArea: false,
  type: "text",
};

export default memo(Component);
