import React, { memo } from "react";
import { View, ViewStyle, SafeAreaView } from "react-native";
import { COLORS } from "../../../configs";
import { SearchBar } from "@rneui/themed";

interface Props {
  color: string;
  style?: ViewStyle | ViewStyle[];
  onFocus?: () => any;
  onChangeText?: (e: string) => void;
  value?: string;
  platform: "default";
}
const Component = ({ style, color, onFocus, onChangeText, value }: Props) => {
  return (
    <>
      <View>
        <SafeAreaView>
          <SearchBar
            inputStyle={{
              backgroundColor: "#F5F7F9",
              display: "flex",
              flexDirection: "row",
            }}
            inputContainerStyle={{
              backgroundColor: "#F5F7F9",
              borderRadius: 30,
            }}
            placeholder={"Cari"}
            round
            lightTheme
            cancelButtonTitle="Batal"
            searchIcon={{ color: "blue", size: 30 }}
            clearIcon={{ color: "gray", size: 20 }}
            onChangeText={onChangeText}
            style={[
              {
                color,
                margin: 0,
              },
              style,
            ]}
            containerStyle={[{ backgroundColor: "blue" }]}
            onFocus={onFocus}
            value={value}
          />
        </SafeAreaView>
      </View>
    </>
  );
};
Component.defaultProps = {
  platform: "default",
  color: COLORS.black1D,
};

export default memo(Component);
