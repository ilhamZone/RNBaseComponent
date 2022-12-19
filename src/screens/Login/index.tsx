import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { Card, Text } from "../../components/atom";
import { Container } from "../../components/molecules";
import { HeaderLogin } from "../../components/organism";
import { Ic24CheckCircleBlue } from "../../configs/svgs";

// import styles from "./styles";

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
        <Card>
          <Ic24CheckCircleBlue height={26} width={26} />
          <Text onPress={() => nav.navigate("HomeNavigation")}>To Home</Text>
        </Card>
      </View>
    </Container>
  );
};

export default Login;
