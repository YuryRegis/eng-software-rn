import React from "react";
import { Dimensions } from "react-native";
import { VStack } from "native-base";

import THEME from "../../../design/athena";

function DrawerListContainer({ children }) {
  const { colors } = THEME;
  const { height } = Dimensions.get("window");
  return (
    <VStack bg={colors.primary[700]} h={height}>
      {children}
    </VStack>
  );
}

export default DrawerListContainer;
