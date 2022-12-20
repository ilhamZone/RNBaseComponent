import { StyleSheet } from "react-native";
import { COLORS } from "../../../configs";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    maxWidth: 76,
  },
  wrapIcon: {
    position: "relative",
  },
  btnIcon: {
    borderRadius: 30,
    position: "absolute",
    top: 0,
    right: 0,
  },
  emptyIcon: {
    height: 54,
    width: 54,
    borderRadius: 40,
    backgroundColor: COLORS.greyCE,
  },
});

export default styles;
