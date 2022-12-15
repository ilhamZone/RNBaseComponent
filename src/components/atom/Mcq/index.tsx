import React, { memo } from "react";
import { SafeAreaView, TouchableOpacity, Text, StyleSheet } from "react-native";
const Component = () => {
  const onTap = () => {
    // eslint-disable-next-line no-console
    console.log("Tombol disentuh!");
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={[
            styles.button,
            {
              alignItems: "flex-start",
              backgroundColor: "#FFFFFF",
              padding: 8,
              borderRadius: 10,
              width: 328,
              height: 40,
            },
          ]}
          onPress={onTap}
        >
          <Text>A. Answer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            {
              alignItems: "flex-start",
              backgroundColor: "#E3FCE5",
              padding: 8,
              borderRadius: 10,
              width: 328,
              height: 40,
            },
          ]}
          onPress={onTap}
        >
          <Text>A. Answer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: "#FEE6E9",
              padding: 8,
              borderRadius: 10,
              width: 328,
              height: 40,
            },
          ]}
          onPress={onTap}
          activeOpacity={0.6}
        >
          <Text>A. Answer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: "#E7EBEE",
              padding: 8,
              borderRadius: 10,
              width: 328,
              height: 40,
            },
          ]}
          onPress={onTap}
          activeOpacity={0.6}
          disabled={true}
        >
          <Text>A. Answer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: "#FFF7D7",
              padding: 8,
              borderRadius: 10,
              width: 328,
              height: 40,
              borderEndColor: "#FFF7D7",
            },
          ]}
          onPress={onTap}
          activeOpacity={0.6}
        >
          <Text>A. Answer</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 36,
  },
  button: {
    padding: 12,
    marginBottom: 12,
  },
});

export default memo(Component);
