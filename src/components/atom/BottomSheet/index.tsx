import React, { memo, useState } from "react";
import { BottomSheet, Button, ListItem } from "@rneui/themed";
import { StyleSheet, View } from "react-native";

const Component = () => {
  const [isVisible, setIsVisible] = useState(false);
  const list = [
    {
      title: "Cancel",
      containerStyle: {
        backgroundColor: "white",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
      onPress: () => setIsVisible(false),
    },
  ];

  return (
    <View>
      <BottomSheet modalProps={{}} isVisible={isVisible}>
        {list.map((l, i) => (
          <ListItem
            key={i}
            containerStyle={l.containerStyle}
            onPress={l.onPress}
          >
            <ListItem.Content>
              <Button buttonStyle={styles.button} />
              <ListItem.Title></ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>
      <View
        style={{ width: 64, height: 10, marginBottom: 20, borderRadius: 20 }}
      >
        <Button onPress={() => setIsVisible(true)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 3,
    width: 100,
    margin: 10,
    marginLeft: 170,
    borderRadius: 10,
    marginBottom: 5,
    alignContent: "center",
  },
});

export default memo(Component);
