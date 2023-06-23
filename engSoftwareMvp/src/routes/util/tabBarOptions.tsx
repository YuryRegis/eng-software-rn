import React from "react";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import THEME from "../../design/athena";

const tabBarOptions = ({ route }) =>
  ({
    tabBarStyle: {
      borderTopWidth: 0,
      backgroundColor: THEME.colors.primary[700],
    },
    headerShown: false,
    tabBarShowLabel: false,
    tabBarActiveTintColor: THEME.colors.secondary[700],
    tabBarIcon: ({ focused, color, size }) => {
      let iconName: string = "";

      if (route.name === "HomeTab") {
        iconName = focused ? "home" : "home-outline";
      } else if (route.name === "DiscoverTab") {
        iconName = focused ? "search" : "search-outline";
      } else if (route.name === "MenuTab") {
        iconName = focused ? "menu" : "menu-outline";
      }

      return <Ionicons name={iconName} size={size} color={color} />;
    },
  } as BottomTabNavigationOptions);

export default tabBarOptions;
