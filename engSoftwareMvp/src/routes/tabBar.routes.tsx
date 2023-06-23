import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { tabBarOptions } from "./util";
import { AppRoutes } from "../routes/app.routes";
import { DiscoverRoutes } from "./discover.routes";
import { ScreenWrapper, Typography } from "../components";

import DrawerNavigator from "./drawer.routes";
import { DrawerActions } from "@react-navigation/native";

function DefaultScreen() {
  return (
    <ScreenWrapper
      style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
    >
      <Typography.RobotoRegular fontSize={"lg"}>
        Tela em branco
      </Typography.RobotoRegular>
    </ScreenWrapper>
  );
}

const { Navigator, Screen } = createBottomTabNavigator();

function BottomTabNavigator() {
  const [open, setopen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  function handleTabPress({ navigation }) {
    return {
      tabPress: (event) => {
        if (!isMounted) return event.preventDefault();
        setopen((oldState) => !oldState);
        open
          ? navigation.dispatch(DrawerActions.openDrawer())
          : navigation.dispatch(DrawerActions.closeDrawer());
      },
    };
  }

  return (
    <Navigator screenOptions={tabBarOptions} initialRouteName="HomeTab">
      <Screen
        name="MenuTab"
        component={DrawerNavigator}
        listeners={handleTabPress}
      />
      <Screen name="HomeTab" component={AppRoutes} />
      <Screen name="DiscoverTab" component={DiscoverRoutes} />
    </Navigator>
  );
}

export default BottomTabNavigator;
