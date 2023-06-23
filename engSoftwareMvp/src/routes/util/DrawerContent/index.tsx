import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import DrawerHeader from "./DrawerHeader";
import DrawerListContainer from "./DrawerListContainer";

function DrawerContent({ ...rest }) {
  return (
    <DrawerContentScrollView showsVerticalScrollIndicator={false} {...rest}>
      <DrawerListContainer>
        <DrawerHeader mb="4" />

        <DrawerItemList
          state={undefined}
          navigation={undefined}
          descriptors={undefined}
          {...rest}
        />
      </DrawerListContainer>
    </DrawerContentScrollView>
  );
}

export default DrawerContent;
