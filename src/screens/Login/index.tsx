import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Text } from "../../components/atom";
import { Mcq } from "../../components/atom";
import { Container } from "../../components/molecules";

import styles from "./styles";

const Login = () => {
  const nav: any = useNavigation();

  return (
    <Container style={styles.container}>
      <TouchableOpacity onPress={() => nav.navigate("Home")}>
        <Text size={20} type="bold">
          Login
        </Text>
        <Mcq />
      </TouchableOpacity>
    </Container>
  );
};

export default Login;
