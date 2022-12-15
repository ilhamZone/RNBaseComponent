import { StyleSheet } from "react-native";
import { COLORS } from "../../../configs";
import { widthPercent } from "../../../utils/helpers";

const styles = StyleSheet.create({
  container: {
    width: widthPercent(100),
    height: 280,
    position: "relative",
    marginBottom: -8,
  },
  bottomLine: {
    backgroundColor: COLORS.white,
    height: 30,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginBottom: -10,
  },
  backBtn: {
    width: 30,
    height: 30,
    position: "absolute",
    left: 20,
  },
});

export default styles;
