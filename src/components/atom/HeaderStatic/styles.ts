import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 12,
    paddingHorizontal: 12,
    alignItems: "flex-end",
  },
  wrpTitle: {
    position: "absolute",
    zIndex: -1,
    bottom: Platform.OS === "android" ? 10 : 12,
    left: 0,
    right: 0,
  },
});

export default styles;
