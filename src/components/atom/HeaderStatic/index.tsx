import React, { memo, ReactNode } from "react";
import { getStatusBarHeight } from "react-native-safearea-height";
import { Platform, TouchableOpacity, View } from "react-native";
import Text from "../Text";
import styles from "./styles";
import { COLORS } from "../../../configs";
import { ChevronLeft, IconClose } from "../../../configs/svgs";
import Space from "../Space";
import Button from "../Button";

interface RightButtonProps {
  title?: string;
  color?: string;
  titleColor?: string;
}
interface Props {
  title: string;
  subTitle: string;
  titleColor: string;
  leftIcon: "back" | "close";
  leftIconColor: string;
  backgroundColor: string;
  onPressLeftIcon?: () => void;
  rightButtonProps: RightButtonProps;
  rightButton: boolean;
  onPressRightButton?: () => void;
  rightComponent?: ReactNode;
}

const Component = ({
  title,
  titleColor,
  leftIcon,
  subTitle,
  backgroundColor,
  leftIconColor,
  onPressLeftIcon,
  rightComponent,
  rightButtonProps,
  rightButton,
  onPressRightButton,
}: Props) => {
  const statusBarHeight = getStatusBarHeight();

  const _renderRight = () => {
    if (rightComponent) {
      return rightComponent;
    }
    if (rightButton) {
      return (
        <Button
          height={28}
          textSize={14}
          title={rightButtonProps.title || ""}
          paddingHorizontal={12}
          color={rightButtonProps.color}
          textColor={rightButtonProps.titleColor}
          onPress={onPressRightButton}
        />
      );
    }
    return <Space width={0} />;
  };

  return (
    <View
      style={[
        styles.container,
        { height: statusBarHeight + 54, backgroundColor: backgroundColor },
      ]}
    >
      {leftIcon === "close" ? (
        <TouchableOpacity onPress={onPressLeftIcon}>
          <IconClose stroke={leftIconColor} height={26} width={26} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={onPressLeftIcon}>
          <ChevronLeft stroke={leftIconColor} height={26} width={26} />
        </TouchableOpacity>
      )}
      <View style={[styles.wrpTitle, { marginBottom: subTitle ? -5 : 0 }]}>
        <Text
          type="semibold"
          size={subTitle ? 14 : 16}
          numberOfLines={1}
          textAlign="center"
          color={titleColor}
        >
          {title}
        </Text>
        {subTitle ? (
          <>
            {Platform.OS === "ios" && <Space height={2} />}
            <Text
              size={11}
              numberOfLines={1}
              textAlign="center"
              color={titleColor}
              lineHeight={12}
            >
              {subTitle}
            </Text>
          </>
        ) : (
          <></>
        )}
      </View>
      {_renderRight()}
    </View>
  );
};

Component.defaultProps = {
  title: "",
  subTitle: "",
  titleColor: COLORS.black1D,
  leftIcon: "back",
  backgroundColor: COLORS.white,
  leftIconColor: COLORS.blue00,
  rightButton: false,
  rightButtonProps: {
    title: "Button",
    color: COLORS.black4D,
    titleColor: COLORS.white,
  },
};

export default memo(Component);
