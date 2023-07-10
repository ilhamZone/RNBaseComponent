import { StyleSheet } from "react-native";
import { COLORS } from "../../../configs";

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderColor: COLORS.greyA5,
    borderRadius: 8,
    paddingRight: 8,
    paddingLeft: 12,
    minHeight: 40,
  },
  placeholder: {
    color: COLORS.greyA5,
  },
});

export default styles;
