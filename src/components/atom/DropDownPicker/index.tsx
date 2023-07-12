import React, { memo } from "react";
import { Dropdown, MultiSelect } from "react-native-element-dropdown";
import styles from "./styles";
import Text from "../Text";
import { COLORS } from "../../../configs";

interface Props {
  data: any[];
  value: any;
  onChange: (e: any) => void;
  search?: boolean;
  searchPlaceholder?: string;
  maxHeight?: number;
  placeholder?: string;
  errorMessage?: any;
  label?: string;
  multiOption?: boolean;
}

const Component = ({
  data,
  search,
  searchPlaceholder,
  value,
  onChange,
  maxHeight,
  placeholder,
  errorMessage,
  label,
  multiOption,
}: Props) => (
  <>
    {label ? <Text style={{ marginBottom: 2 }}>{label}</Text> : null}

    {multiOption ? (
      <MultiSelect
        data={data}
        maxHeight={maxHeight}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        search={search}
        searchPlaceholder={searchPlaceholder}
        style={styles.container}
        placeholderStyle={styles.placeholder}
      />
    ) : (
      <Dropdown
        data={data}
        maxHeight={maxHeight}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        search={search}
        searchPlaceholder={searchPlaceholder}
        style={styles.container}
        placeholderStyle={styles.placeholder}
      />
    )}
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

Component.defaultProps = {
  search: false,
  searchPlaceholder: "Search an item",
  placeholder: "Select an item",
  maxHeight: 200,
};

export default memo(Component);
