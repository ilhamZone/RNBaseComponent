import { useNavigation } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { HeaderStatic, Space, Text } from "../../components/atom";
import { Container } from "../../components/molecules";
import { API, COLORS } from "../../configs";

const Home = () => {
  const nav: any = useNavigation();
  const { isLoading, data } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await API.getData();
      return res.data?.data;
    },
  });

  if (isLoading) return <Text>Loading ...</Text>;

  return (
    <Container transculent barStyle="light-content">
      <HeaderStatic
        title="Beranda"
        backgroundColor={COLORS.blue00}
        titleColor={COLORS.white}
        leftIconColor={COLORS.white}
        onPressLeftIcon={() => nav.navigate("Login")}
      />
      <Space height={40} />
      <Text>okok</Text>
      {data?.map((user: any, index: number) => (
        <Text key={index}>{user?.first_name}</Text>
      ))}
    </Container>
  );
};

export default Home;
