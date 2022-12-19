import { useNavigation } from "@react-navigation/native";
import React from "react";
import { HeaderStatic } from "../../components/atom";
import { Container } from "../../components/molecules";

const Component = () => {
  const nav = useNavigation();
  return (
    <Container transculent>
      <HeaderStatic
        title="Purchase"
        leftIcon="back"
        rightButton
        subTitle="Subtitle Purchase"
        rightButtonProps={{
          title: "Tekan",
        }}
        onPressLeftIcon={() => nav.goBack()}
      />
    </Container>
  );
};

export default Component;
