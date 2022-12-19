import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View } from "react-native";
import {
  CheckBox,
  HeaderStatic,
  Space,
  Text,
  Toast,
} from "../../components/atom";
import { Container, PopUp } from "../../components/molecules";
import { COLORS } from "../../configs";
import { Robot1 } from "../../configs/svgs";

const Home = () => {
  const nav: any = useNavigation();

  const [openToast, setOpenToast] = useState(false);
  const [checked, setChecked] = useState(false);
  const [popUp, setPopUp] = useState(false);

  return (
    <Container transculent barStyle="light-content">
      <HeaderStatic
        title="Beranda"
        backgroundColor={COLORS.blue00}
        titleColor={COLORS.white}
        leftIconColor={COLORS.white}
        onPressLeftIcon={() => nav.navigate("Login")}
      />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 30,
          flex: 1,
        }}
      >
        <Space height={20} />
        <Text onPress={() => setPopUp(true)}>Pop Up</Text>
        <Space height={20} />
        <Text onPress={() => setOpenToast(true)}>Toast</Text>
        <Space height={20} />
        <CheckBox
          type="small"
          checked={checked}
          onPress={() => setChecked(!checked)}
        />
      </View>
      <Toast
        label="Toast Success"
        type="success"
        isVisible={openToast}
        onClose={() => setOpenToast(false)}
        bottomSpace={120}
      />

      <PopUp
        withCancel
        svgComponent={<Robot1 height={100} width={100} />}
        isVisible={popUp}
        onClose={() => setPopUp(false)}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, excepturi?"
      />
    </Container>
  );
};

export default Home;
