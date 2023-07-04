import { Dimensions } from "react-native";

export const heightPercent = (percent: number) =>
  (percent / 100) * Dimensions.get("window").height;

export const widthPercent = (percent: number) =>
  (percent / 100) * Dimensions.get("window").width;
