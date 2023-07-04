import React, { memo } from "react";
import { View, ViewStyle } from "react-native";
import Modal from "react-native-modal";

import { heightPercent } from "../../../utils/helpers";

import styles from "./styles";
import { COLORS } from "../../../configs";

interface Props {
  children: React.ReactNode;
  isVisible: boolean;
  onSwipeComplete: () => void | undefined;
  onBackdropPress: () => void | undefined;
  height: number | any;
  lineStyle?: ViewStyle | ViewStyle[];
  maxHeight?: number;
}

const Component = ({
  isVisible,
  onSwipeComplete,
  onBackdropPress,
  children,
  height,
  lineStyle,
  maxHeight,
}: Props) => (
  <Modal
    testID="modal"
    isVisible={isVisible}
    onBackdropPress={onBackdropPress}
    onSwipeComplete={onSwipeComplete}
    swipeDirection={["down"]}
    onBackButtonPress={onSwipeComplete}
    propagateSwipe
    backdropColor={COLORS.black1D}
    backdropOpacity={0.5}
    style={styles.wrapper}
  >
    <View style={[styles.innerWrap, { height, maxHeight }]}>
      <View style={[styles.line, lineStyle]} />
      {children}
    </View>
  </Modal>
);

Component.defaultProps = {
  isVisible: false,
  onSwipeComplete: undefined,
  onBackdropPress: undefined,
  height: 400,
  maxHeight: heightPercent(100),
};

export default memo(Component);
