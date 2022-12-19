import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { Text } from "../../components/atom";

import { Container } from "../../components/molecules";
import { HeaderLogin } from "../../components/organism";

const Login = () => {
  const nav: any = useNavigation();

  return (
    <Container transculent barStyle="light-content">
      <HeaderLogin />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 30,
          flex: 1,
        }}
      >
        <Text onPress={() => nav.navigate("HomeNavigation")}>To Home</Text>
      </View>
    </Container>
  );
};

export default Login;
