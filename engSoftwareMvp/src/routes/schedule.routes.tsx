import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { MySchedule, MyScheduleHistory } from "../pages";

const { Navigator, Screen } = createNativeStackNavigator();

function ScheduleRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="MySchedule" component={MySchedule} />
      <Screen name="MyScheduleHistory" component={MyScheduleHistory} />
    </Navigator>
  );
}

export default ScheduleRoutes;
