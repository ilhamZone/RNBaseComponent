import { StyleSheet } from "react-native";

import { widthPercent } from "../../../utils/helpers";

const styles = StyleSheet.create({
  container: {
    width: widthPercent(90),
    borderRadius: 10,
  },
  content: {
    flexDirection: "row",
    margin: 14,
  },
  label: {
    marginLeft: 12,
    fontSize: 16,
  },
});

export default styles;
