import {
  Platform,
  Pressable,
  StyleSheet,
  View,
  Modal,
  TouchableHighlight,
} from "react-native";
import React, { useState } from "react";

import DateTimePicker from "@react-native-community/datetimepicker";
import Text from "../Text";
import { COLORS } from "../../../configs";
import moment from "moment";

interface Props {
  onDateChange: any;
  value: any;
  placeholder?: string;
  errorMessage?: any;
  label?: string;
}

const Component = ({
  onDateChange,
  value,
  placeholder,
  errorMessage,
  label,
}: Props) => {
  const [date, setDate]: any = useState();
  const [show, setShow] = useState(false);

  const onChange = (_: any, selectedDate: any) => {
    setDate(new Date(selectedDate));
  };

  const onAndroidChange = (_: any, selectedDate: any) => {
    setShow(false);
    if (selectedDate) {
      setDate(new Date(selectedDate));
      onDateChange(new Date(selectedDate));
    }
  };

  const onCancelPress = () => {
    date && setDate(new Date(date));
    setShow(false);
  };
  const onDonePress = () => {
    onDateChange(date || new Date());
    setShow(false);
  };

  const renderDatePicker = () => {
    return (
      <>
        <DateTimePicker
          display={Platform.OS === "ios" ? "spinner" : "default"}
          timeZoneOffsetInMinutes={0}
          value={value || new Date()}
          mode="date"
          minimumDate={new Date(1920, 10, 20)}
          onChange={Platform.OS === "ios" ? onChange : onAndroidChange}
        />
      </>
    );
  };

  return (
    <>
      {label ? <Text style={{ marginBottom: 2 }}>{label}</Text> : null}
      <Pressable style={styles.box} onPress={() => setShow(true)}>
        <View>
          <Text
            style={[
              styles.txt,
              { color: value ? COLORS.black1D : COLORS.greyA5 },
            ]}
          >
            {value ? moment(value).format("DD / MM / YYYY") : placeholder}
          </Text>
          {Platform.OS !== "ios" && show && renderDatePicker()}

          {Platform.OS === "ios" && (
            <Modal
              transparent={true}
              animationType="slide"
              visible={show}
              supportedOrientations={["portrait"]}
              onRequestClose={() => setShow(!show)}
            >
              <View style={styles.screen}>
                <TouchableHighlight
                  underlayColor={"#FFF"}
                  style={styles.pickerContainer}
                >
                  <View style={{ backgroundColor: "#fff" }}>
                    <View style={{ marginTop: 20 }}>{renderDatePicker()}</View>
                    <TouchableHighlight
                      underlayColor={"transparent"}
                      onPress={onCancelPress}
                      style={[styles.btnText, styles.btnCancel]}
                    >
                      <Text type="semibold">Cancel</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                      underlayColor={"transparent"}
                      onPress={onDonePress}
                      style={[styles.btnText, styles.btnDone]}
                    >
                      <Text type="semibold">Pick</Text>
                    </TouchableHighlight>
                  </View>
                </TouchableHighlight>
              </View>
            </Modal>
          )}
        </View>
      </Pressable>
      {errorMessage ? (
        <Text
          style={{ marginTop: 2 }}
          size={12}
          color={COLORS.dangerBase}
          textAlign="left"
        >
          {errorMessage}
        </Text>
      ) : null}
    </>
  );
};

Component.defaultProps = {
  placeholder: "Pick date",
};

export default Component;

const styles = StyleSheet.create({
  pickerContainer: {
    backgroundColor: COLORS.white,
    width: "100%",
    height: "30%",
    position: "absolute",
    bottom: 0,
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: 40,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: COLORS.greyA5,
  },
  txt: {
    fontSize: 16,
  },
  screen: {
    flex: 1,
  },
  btnText: {
    position: "absolute",
    top: 0,
    height: 50,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btnCancel: {
    left: 0,
  },
  btnDone: {
    right: 0,
  },
  textDate: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
