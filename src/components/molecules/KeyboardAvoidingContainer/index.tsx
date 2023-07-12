import React, { ReactNode } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ViewStyle,
  FlatList,
} from "react-native";
import Container from "../Container";

interface Props {
  children: ReactNode;
  style?: ViewStyle | ViewStyle;
}

const index = ({ children, style }: Props) => {
  return (
    <Container>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <FlatList
          data={[]}
          keyExtractor={() => "key"}
          renderItem={null}
          ListHeaderComponent={<>{children}</>}
          contentContainerStyle={style}
        />
      </KeyboardAvoidingView>
    </Container>
  );
};

export default index;
