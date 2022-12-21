import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../configs";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  wrapInput: {
    backgroundColor: COLORS.neutral10,
    flex: 1,
    borderRadius: 30,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
  },
  inputStyle: {
    fontSize: 14,
    fontFamily: FONTS.regular,
    flex: 1,
    marginLeft: 10,
  },
});

export default styles;
