import { StyleSheet } from "react-native";
import { COLORS } from "../../../configs";
import { widthPercent } from "../../../utils/helpers";

const styles = StyleSheet.create({
  modalStyle: {
    position: "absolute",
    width: widthPercent(100) - 32,
    alignSelf: "center",
    margin: 0,
  },
  container: {
    paddingLeft: 16,
    paddingRight: 12,
    backgroundColor: "lime",
    minHeight: 40,
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
    paddingVertical: 12,

    shadowColor: COLORS.grey86,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
});

export default styles;
