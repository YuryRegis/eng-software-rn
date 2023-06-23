import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Discover, MentorList } from "../pages";

const { Navigator, Screen } = createNativeStackNavigator();

export function DiscoverRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Discover" component={Discover} />
      <Screen name="MentorList" component={MentorList} />
    </Navigator>
  );
}
