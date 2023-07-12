import { StyleSheet } from "react-native";

import { COLORS } from "../../../configs";

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: COLORS.greyA5,
    width: "100%",
    minHeight: 40,
    borderRadius: 10,
    paddingLeft: 16,
    paddingRight: 12,
    alignItems: "center",
    flexDirection: "row",
    position: "relative",
    justifyContent: "space-between",
    zIndex: 100,
    backgroundColor: "lime",
  },
  icon: {
    height: 10,
    width: 20,
    resizeMode: "contain",
    tintColor: COLORS.greyA5,
  },
  label: {
    position: "absolute",
    left: 7,
    top: -13,
    backgroundColor: COLORS.white,
    paddingHorizontal: 16,
    paddingTop: 2,
    paddingBottom: 2,
    borderRadius: 20,
    zIndex: 1,
  },
  errorText: {
    alignSelf: "flex-start",
    marginLeft: 12,
    marginTop: 4,
    fontSize: 14,
    color: COLORS.dangerBase,
  },
  wrapDate: {
    position: "relative",
    width: "100%",
  },
  dateIos: {
    width: "100%",
    position: "absolute",
    right: 16,
    opacity: 0.011,
  },
});

export default styles;
