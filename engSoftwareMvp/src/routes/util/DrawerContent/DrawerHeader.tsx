import React from "react";
import { SvgProps } from "react-native-svg";
import { Typography } from "../../../components";
import { VStack, Center, IStackProps, ICenterProps } from "native-base";

import THEME from "../../../design/athena";

export interface IDrawerHeaderProps extends IStackProps {
  _center?: ICenterProps;
  _svg?: SvgProps;
}

function DrawerHeader({ _center, _svg, ...rest }: IDrawerHeaderProps) {
  const { colors } = THEME;
  return (
    <VStack
      borderBottomRightRadius="33"
      bg={colors.secondary[700]}
      h={66}
      {...rest}
    >
      <Center flex={1} {..._center}>
        <Typography.RobotoBold fontSize={18}>
          YOUR LOGO HERE
        </Typography.RobotoBold>
      </Center>
    </VStack>
  );
}

export default DrawerHeader;
