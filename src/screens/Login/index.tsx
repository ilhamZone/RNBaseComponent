import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { Card, Text, BottomSheet, Mcq } from "../../components/atom";
import { SelectedBar, Text } from "../../components/atom";
import { SearchBar } from "../../components/atom";
import { Container } from "../../components/molecules";
import { HeaderLogin } from "../../components/organism";

const Login = () => {
  const nav: any = useNavigation();

  return (
    <Container>
      <SearchBar value={search} onChangeText={text => setSearch(text)} />
      <TouchableOpacity onPress={() => nav.navigate("Home")}>
        <Text size={20} type="bold">
          Login
        </Text>
        <SelectedBar size="big" />
      </TouchableOpacity>
    </Container>
  );
};

export default Login;
