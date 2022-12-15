import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Text } from "react-native";
import { Container } from "../../components/molecules";
import { API } from "../../configs";

const Home = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await API.getData();
      return res.data?.data;
    },
  });

  if (isLoading) return <Text>Loading ...</Text>;

  return (
    <Container>
      <Text>okok</Text>
      {data?.map((user: any, index: number) => (
        <Text key={index}>{user?.first_name}</Text>
      ))}
    </Container>
  );
};

export default Home;
