import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../configs";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 40,
  },
  input: {
    fontSize: 16,
    flex: 1,
    marginHorizontal: 12,
    color: COLORS.neutral100,
    fontFamily: FONTS.regular,
    paddingVertical: 4,
  },
});

export default styles;
