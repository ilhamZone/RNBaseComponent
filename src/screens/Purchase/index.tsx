import React from "react";
import { Text, TextInput } from "react-native";
import { HeaderStatic } from "../../components/atom";
import { Container } from "../../components/molecules";

const Component = () => {
  return (
    <Container translucent barStyle="light-content">
      <HeaderStatic title="Title" />
      <Text>Purchase</Text>
      <TextInput />
    </Container>
  );
};

export default Component;
