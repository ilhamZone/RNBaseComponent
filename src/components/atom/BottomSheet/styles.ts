import { StyleSheet } from "react-native";
import { COLORS } from "../../../configs";

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "flex-end",
    margin: 0,
  },
  innerWrap: {
    height: 400,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
    paddingTop: 12,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  line: {
    backgroundColor: COLORS.blue00,
    height: 4,
    width: 64,
    borderRadius: 10,
    alignSelf: "center",
    marginBottom: 20,
  },
});

export default styles;
