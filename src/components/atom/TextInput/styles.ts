import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../configs";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.neutral10,
    borderRadius: 100,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    fontSize: 16,
    flex: 1,
    marginHorizontal: 10,
    color: COLORS.neutral100,
    fontFamily: FONTS.bold,
  },
  iconLeft: {
    marginLeft: 10,
  },
  iconRight: {
    marginRight: 10,
  },
});

export default styles;
