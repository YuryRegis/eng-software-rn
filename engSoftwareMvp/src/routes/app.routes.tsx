import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  CreateAccount,
  MentorDetail,
  EditProfile,
  MentorList,
  Login,
  Home,
  Help,
} from "../pages";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="Help" component={Help} />
      <Screen name="Login" component={Login} />
      <Screen name="MentorList" component={MentorList} />
      <Screen name="EditProfile" component={EditProfile} />
      <Screen name="MentorDetail" component={MentorDetail} />
      <Screen name="CreateAccount" component={CreateAccount} />
    </Navigator>
  );
}
