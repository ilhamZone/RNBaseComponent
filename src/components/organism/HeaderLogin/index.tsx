import React, { memo } from "react";
import { Platform } from "react-native";
import { COLORS } from "../../../configs";
import { Robot1 } from "../../../configs/svgs";
import { HeaderContent, Space, Text } from "../../atom";
import styles from "./styles";

interface Props {
  title: string;
  desc: string;
}

const Component = ({ title, desc }: Props) => (
  <HeaderContent style={styles.container} backButton>
    <Robot1 height={80} width={80} />
    <Space height={16} />
    <Text type="semibold" size={24} color={COLORS.white}>
      {title}
    </Text>
    <Space height={Platform.OS === "ios" ? 4 : 0} />
    <Text size={14} textAlign="center" color={COLORS.white}>
      {desc}
    </Text>
  </HeaderContent>
);

Component.defaultProps = {
  title: "Selamat Datang",
  desc: "Masuk atau Daftar dengan menggunakan nomor handphone atau email.",
};

export default memo(Component);
