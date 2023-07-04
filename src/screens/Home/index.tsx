import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text } from "../../components/atom";
import { Container } from "../../components/molecules";

const Home = () => {
  const nav: any = useNavigation();

  return (
    <Container barStyle="light-content">
      <Text onPress={() => nav.navigate("Home")}>koko</Text>
    </Container>
  );
};

export default Home;
