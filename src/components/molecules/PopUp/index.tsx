import React, { memo, ReactNode } from "react";
import { View, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { COLORS } from "../../../configs";
import { IconClose } from "../../../configs/svgs";
import { Button } from "../../atom";
import Space from "../../atom/Space";
import Text from "../../atom/Text";
import styles from "./styles";

interface Props {
  isVisible: boolean;
  description: string;
  onClose?: () => void;
  onSubmit?: () => void;
  bodyComponent?: ReactNode;
  btnHorizontal: boolean;
  svgComponent?: ReactNode;
  withCancel?: boolean;
  titleBtnCancel: string;
  titleBtnSubmit: string;
}

const Component = ({
  isVisible,
  onClose,
  onSubmit,
  bodyComponent,
  description,
  btnHorizontal,
  svgComponent,
  withCancel,
  titleBtnCancel,
  titleBtnSubmit,
}: Props) => {
  const _renderBody = () => {
    if (bodyComponent) {
      return bodyComponent;
    }
    if (description) {
      return (
        <Text textAlign="center" size={14}>
          {description}
        </Text>
      );
    }
    return <></>;
  };
  return (
    <Modal
      isVisible={isVisible}
      animationIn="fadeIn"
      animationOut="fadeOut"
      style={{ margin: 0, paddingHorizontal: 20 }}
      backdropColor={COLORS.black1D}
      backdropOpacity={0.5}
      animationInTiming={1000}
    >
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onClose}
          style={{ position: "absolute", right: 16, top: 16 }}
        >
          <IconClose
            height={24}
            width={24}
            stroke={COLORS.greyA5}
            strokeWidth={2}
          />
        </TouchableOpacity>
        {svgComponent && (
          <>
            <Space height={16} />
            {svgComponent}
            <Space height={16} />
          </>
        )}
        <Text size={18} type="semibold">
          Title Modal
        </Text>
        <Space height={6} />
        {_renderBody()}
        <Space height={30} />
        <View
          style={{
            flexDirection: btnHorizontal ? "row-reverse" : "column",
            width: "100%",
          }}
        >
          <Button
            onPress={onSubmit}
            title={titleBtnSubmit}
            style={{ flex: btnHorizontal ? 1 : 0 }}
            widthFull={btnHorizontal}
          />
          <Space height={withCancel ? 10 : 0} width={withCancel ? 12 : 0} />
          {withCancel && (
            <Button
              onPress={onClose}
              title={titleBtnCancel}
              widthFull={btnHorizontal}
              style={{ flex: btnHorizontal ? 1 : 0 }}
              color={COLORS.white}
              textColor={COLORS.blue00}
              borderWidth={1}
            />
          )}
        </View>
      </View>
    </Modal>
  );
};

Component.defaultProps = {
  isVisible: false,
  description: "",
  btnHorizontal: false,
  withCancel: false,
  titleBtnCancel: "Batal",
  titleBtnSubmit: "Submit",
};

export default memo(Component);
