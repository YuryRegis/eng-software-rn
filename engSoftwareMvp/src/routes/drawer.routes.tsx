import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { useLocale } from "../hooks";
import { drawerOptions } from "./util";
import ProfileRoutes from "./profile.routes";
import SettingsRoutes from "./settings.routes";
import ScheduleRoutes from "./schedule.routes";
import DrawerContent from "./util/DrawerContent";
import { Help, AboutUs, Profile, CreateProposal } from "../pages";
import { DRAWER_STRINGS, IDrawerStrings } from "../language";

const { Navigator, Screen } = createDrawerNavigator();

function DrawerNavigator() {
  const { locale } = useLocale();
  const strings: IDrawerStrings = DRAWER_STRINGS[locale];

  return (
    <Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      useLegacyImplementation={true}
      screenOptions={drawerOptions}
    >
      <Screen
        name={strings.profile}
        component={ProfileRoutes}
        options={{
          drawerIcon: ({ color, size, focused }) => {
            const iconName = focused ? "person" : "person-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        }}
      />
      <Screen
        name={strings.schedule}
        component={ScheduleRoutes}
        options={{
          drawerIcon: ({ color, size, focused }) => {
            const iconName = focused ? "ios-calendar" : "ios-calendar-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        }}
      />
      <Screen
        name={strings.createProposal}
        component={CreateProposal}
        options={{
          drawerIcon: ({ color, size, focused }) => {
            const iconName = focused ? "globe" : "globe-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        }}
      />
      <Screen
        name={strings.settings}
        component={SettingsRoutes}
        options={{
          drawerIcon: ({ color, size, focused }) => {
            const iconName = focused ? "cog" : "cog-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        }}
      />
      <Screen
        name={strings.help}
        component={Help}
        options={{
          drawerIcon: ({ color, size, focused }) => {
            const iconName = focused ? "help-circle" : "help-circle-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        }}
      />
      <Screen
        name={strings.aboutUs}
        component={AboutUs}
        options={{
          drawerIcon: ({ color, size, focused }) => {
            const iconName = focused
              ? "information-circle"
              : "information-circle-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        }}
      />
    </Navigator>
  );
}

export default DrawerNavigator;
