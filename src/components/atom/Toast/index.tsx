import React, { memo, useEffect, useState } from "react";
import { SafeAreaView, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import { COLORS } from "../../../configs";
import { IconClose } from "../../../configs/svgs";
import Text from "../Text";
import styles from "./styles";

interface Props {
  isVisible: boolean;
  closeTimer: number;
  onClose?: () => void;
  type: "default" | "general" | "success" | "danger" | "warning" | "cancel";
  label: string;
  bottomSpace: number;
}

const Component = ({
  isVisible,
  onClose,
  type,
  label,
  bottomSpace,
  closeTimer,
}: Props) => {
  const [elevation, setElevation] = useState(3);

  useEffect(() => {
    let oneLoad = true;
    if (isVisible === true && oneLoad) {
      setTimeout(() => {
        closeTimer !== 0 && onClose && onClose();
      }, closeTimer);
    }
    return () => {
      oneLoad = false;
    };
  }, [closeTimer, isVisible, onClose]);

  const _type = () => {
    if (type === "general") {
      return { bgColor: COLORS.blue00, color: COLORS.white };
    }
    if (type === "success") {
      return { bgColor: COLORS.succesLight1, color: COLORS.white };
    }
    if (type === "danger") {
      return { bgColor: COLORS.dangerBase, color: COLORS.white };
    }
    if (type === "warning") {
      return { bgColor: COLORS.yellowFF, color: COLORS.black1D };
    }
    if (type === "cancel") {
      return {
        bgColor: COLORS.white,
        color: COLORS.black1D,
        btnColor: COLORS.dangerBase,
      };
    }
    return { bgColor: COLORS.black1D, color: COLORS.white };
  };
  return (
    <Modal
      style={[styles.modalStyle, { bottom: bottomSpace }]}
      isVisible={isVisible}
      onBackdropPress={onClose}
      backdropOpacity={0}
      animationIn="zoomIn"
      animationOut="fadeOut"
      onModalWillHide={() => setElevation(0)}
      onModalHide={() => setElevation(3)}
    >
      <SafeAreaView>
        <View
          style={[
            styles.container,
            { backgroundColor: _type()?.bgColor, elevation: elevation },
          ]}
        >
          <Text
            style={{ flex: 1, marginRight: 8 }}
            color={_type()?.color}
            size={12}
            type="semibold"
          >
            {label}
          </Text>

          {type === "cancel" ? (
            <TouchableOpacity activeOpacity={0.8} onPress={onClose}>
              <Text color={_type().btnColor} size={12}>
                Batal
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity activeOpacity={0.8} onPress={onClose}>
              <IconClose height={17} width={17} stroke={_type().color} />
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    </Modal>
  );
};

Component.defaultProps = {
  type: "default",
  label: "Toast",
  bottomSpace: 16,
  closeTimer: 1500,
};

export default memo(Component);
