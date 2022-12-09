import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Container, SlideScreen } from "../../components/molecules";
import { IMAGES } from "../../configs";

const slide = [
  {
    label: "Selamat Datang!",
    buttonLabel: "Lanjut",
    image: IMAGES.intro1,
    desc: "Belajar, latihan, serta tes kemampuan belajarmu bersama Kelas Pintar.",
  },
  {
    label: "Solusi Belajar Online",
    buttonLabel: "Lanjut",
    image: IMAGES.intro2,
    desc: "Belajar lebih mudah dan menyenangkan dengan metode pintar, interaktif, dan terintegrasi.",
  },
  {
    label: "Semua Bisa Pintar",
    buttonLabel: "Mulai",
    image: IMAGES.intro3,
    desc: "Belajar dengan materi pelajaran yang bervariasi, puluhan ribu soal latihan serta penjelasannya dari Kelas Pintar​.",
  },
];

const Intro = () => {
  const nav: any = useNavigation();
  return (
    <Container>
      <SlideScreen
        data={slide}
        onPress={() => nav.navigate("Login")}
        onPressSkip={() => nav.navigate("Login")}
      />
    </Container>
  );
};

export default Intro;
