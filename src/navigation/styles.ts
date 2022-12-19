import { StyleSheet } from "react-native";

import { COLORS } from "../configs";

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    backgroundColor: COLORS.white,
    borderTopWidth: 0.5,
    borderColor: COLORS.greyCE,

    position: "relative",
    justifyContent: "space-between",
  },
  tabBtn: {
    alignItems: "center",
    height: 60,
    flex: 1,
    borderColor: COLORS.blue00,
  },
  row: {
    flexDirection: "row",
  },
  wrapBtn: {
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
    width: "100%",
    paddingBottom: 6,
  },
});

export default styles;
