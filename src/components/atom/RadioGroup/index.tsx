import React from "react";
import { StyleSheet, View } from "react-native";

import RadioButton from "../RadioButton";
import { RadioGroupProps } from "./../RadioButton/types";
import Text from "../Text";
import { COLORS } from "../../../configs";

export default function RadioGroup({
  containerStyle,
  layout = "column",
  onPress,
  radioButtons,
  selectedId,
  testID,
  errorMessage,
  label,
}: RadioGroupProps) {
  function handlePress(id: string) {
    if (id !== selectedId && onPress) {
      onPress(id);
    }
  }

  return (
    <>
      {label ? <Text>{label}</Text> : null}
      <View
        style={[styles.container, { flexDirection: layout }, containerStyle]}
        testID={testID}
      >
        {radioButtons.map(button => (
          <RadioButton
            {...button}
            key={button.id}
            selected={button.id === selectedId}
            onPress={() => handlePress(button.id)}
          />
        ))}
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
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
  },
});
