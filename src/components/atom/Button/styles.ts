import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: Platform.OS === "ios" ? 2 : 0,
  },
  wrapTitle: {
    flexDirection: "row",
    paddingTop: 2,
  },
  icon: {
    height: 24,
    width: 24,
    marginRight: 10,
    marginTop: 4,
    marginBottom: -4,
  },
});

export default styles;
