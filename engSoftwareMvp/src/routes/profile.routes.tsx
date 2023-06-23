import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Profile, EditProfile } from "../pages";

const { Navigator, Screen } = createNativeStackNavigator();

function ProfileRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Profile" component={Profile} />
      <Screen name="EditProfile" component={EditProfile} />
    </Navigator>
  );
}

export default ProfileRoutes;
