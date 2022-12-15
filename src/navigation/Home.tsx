import React from "react";
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { Platform, SafeAreaView, TouchableOpacity, View } from "react-native";

import { Space, Text } from "../components/atom";
import { COLORS } from "../configs";

import styles from "./styles";

import HomeScreen from "../screens/Home";
import ProfileScreen from "../screens/Profile";
import PurchaseScreen from "../screens/Purchase";
import NotificationScreen from "../screens/Notification";

import {
  IconNavHome,
  IconNavNotification,
  IconNavProfile,
  IconNavPurchase,
} from "../configs/svgs";

const Tab = createBottomTabNavigator();

function MyTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const focusedOptions = descriptors[state.routes[state.index].key]
    .options as any;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const IconMenu = [
    { comp: <IconNavHome height={24} width={24} fill={COLORS.greyA5} /> },
    { comp: <IconNavPurchase height={24} width={24} fill={COLORS.greyA5} /> },
    {
      comp: <IconNavNotification height={24} width={24} fill={COLORS.greyA5} />,
    },
    {
      comp: <IconNavProfile height={24} width={24} fill={COLORS.greyA5} />,
    },
  ];

  const IconMenuActive = [
    { comp: <IconNavHome height={24} width={24} fill={COLORS.blue00} /> },
    { comp: <IconNavPurchase height={24} width={24} fill={COLORS.blue00} /> },
    {
      comp: <IconNavNotification height={24} width={24} fill={COLORS.blue00} />,
    },
    {
      comp: <IconNavProfile height={24} width={24} fill={COLORS.blue00} />,
    },
  ];

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.black1D }}>
      <View style={styles.wrapper}>
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key] as any;
          let label = route.name;

          if (options.tabBarLabel !== undefined) {
            label = options.tabBarLabel;
          }

          if (options.title !== undefined) {
            label = options.title;
          }

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={index}
              activeOpacity={0.7}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              style={[styles.tabBtn, { borderTopWidth: isFocused ? 3 : 0 }]}
            >
              <View style={styles.wrapBtn}>
                {isFocused ? IconMenuActive[index].comp : IconMenu[index].comp}
                <Space height={Platform.OS === "ios" ? 6 : 4} />
                <Text
                  size={11}
                  color={isFocused ? COLORS.blue00 : COLORS.black4D}
                >
                  {label}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const BottomTabs = () => {
  return (
    <>
      <Tab.Navigator
        tabBar={(props: BottomTabBarProps) => <MyTabBar {...props} />}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Beranda", header: () => null }}
        />
        <Tab.Screen
          name="Settings"
          component={PurchaseScreen}
          options={{ title: "Pembelian", header: () => null }}
        />
        <Tab.Screen
          name="Inbox"
          component={NotificationScreen}
          options={{ title: "Notifikasi" }}
        />
        <Tab.Screen
          name="Akun"
          component={ProfileScreen}
          options={{ title: "Profil" }}
        />
      </Tab.Navigator>
    </>
  );
};

export default BottomTabs;
