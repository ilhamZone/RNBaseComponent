import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SelectedBar, Text } from "../../components/atom";
import { SearchBar } from "../../components/atom";
import { Container } from "../../components/molecules";

const Login = () => {
  const nav: any = useNavigation();
  const [search, setSearch] = useState("");

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
