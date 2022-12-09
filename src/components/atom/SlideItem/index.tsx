import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";

import { Space, Text } from "../../atom";
import { COLORS } from "../../../configs";
import { heightPercent } from "../../../utils/helpers";

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    backgroundColor: COLORS.main,
  },
  imageStyle: {
    flex: 1,
    resizeMode: "contain",
  },
  content: {
    width,
    height: heightPercent(50),
    alignItems: "center",
    flexDirection: "row",
    marginBottom: -8,
  },
  wrapDesc: {
    paddingHorizontal: 20,
  },
});

interface Props {
  image: any;
  label: string;
  desc: string;
  getHeightImage?: (e: number) => void;
}

const Slide = ({ image, label, desc, getHeightImage }: Props) => {
  return (
    <View style={styles.container}>
      <View
        onLayout={event =>
          getHeightImage && getHeightImage(event.nativeEvent.layout.height)
        }
      >
        <Space height={24} />
        <View style={styles.content}>
          <Space width={20} />
          <Image source={image} style={[styles.imageStyle]} />
          <Space width={20} />
        </View>
      </View>
      <Space height={26} />
      <View style={styles.wrapDesc}>
        <Text
          color={COLORS.black1D}
          type="semibold"
          textAlign="center"
          size={24}
        >
          {label}
        </Text>
        <Space height={8} />
        <Text color={COLORS.black4D} size={14} textAlign="center">
          {desc}
        </Text>
      </View>
    </View>
  );
};

export default Slide;
