import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Settings, ChangePassword } from "../pages";

const { Navigator, Screen } = createNativeStackNavigator();

function SettingsRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="MySchedule" component={Settings} />
      <Screen name="ChangePassword" component={ChangePassword} />
    </Navigator>
  );
}

export default SettingsRoutes;
