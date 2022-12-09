import { Dimensions, StyleSheet } from "react-native";

import { COLORS, FONTS } from "../../../configs";
import { heightPercent, widthPercent } from "../../../utils/helpers";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.main,
  },
  slider: {
    flex: 1,
  },
  font: {
    fontFamily: FONTS.regular,
    color: COLORS.black1D,
    fontSize: 16,
  },
  footer: {
    height: heightPercent(7),
  },
  textSmall: {
    fontSize: 10,
    textAlign: "center",
  },
  wrapBtn: {
    position: "absolute",
    alignSelf: "center",
    zIndex: 2,
    bottom: 30,
    width: widthPercent(100) - 40,
  },
  textDesc: {
    fontFamily: FONTS.regular,
    color: COLORS.main,
    fontSize: 16,
    textAlign: "center",
    lineHeight: 24,
  },
  label: {
    fontFamily: FONTS.bold,
    fontSize: 18,
    color: COLORS.blue00,
    marginTop: 34,
    marginBottom: 12,
    textAlign: "center",
  },
  slide: {
    position: "absolute",
    height: heightPercent(100),
    zIndex: 1,
  },
  wrapDot: {
    position: "absolute",
    zIndex: 2,
    alignSelf: "center",
    // bottom: heightPercent(34),
    // backgroundColor: "red",
  },
  dotPage: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  skipBtn: {
    position: "absolute",
    zIndex: 2,
    right: 20,
    top: 10,
  },
});

export { width, styles };
