import { StyleSheet } from "react-native";
import { COLORS } from "../../../configs";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: COLORS.blue00,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 12,
    paddingHorizontal: 12,
    alignItems: "flex-end",
  },
});

export default styles;
