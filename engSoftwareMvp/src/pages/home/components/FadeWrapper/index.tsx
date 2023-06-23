import React from "react";
import { VStack, IStackProps, ITextProps, Box } from "native-base";
import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";
import MaskedView from "@react-native-community/masked-view";

import { Typography } from "../../../../components";

export interface IFadeWrapperProps extends IStackProps {
  height?: number;
  _title?: ITextProps;
  title?: string | JSX.Element;
  _gradient?: LinearGradientProps;
}

function FadeWrapper({
  title,
  _title,
  children,
  _gradient,
  height = 120,
  ...rest
}: IFadeWrapperProps) {
  return (
    <VStack h={height} position={"relative"} {...rest}>
      <Box position={"absolute"} left={0} right={0} zIndex={-3}>
        {children}
      </Box>

      <Box h={height} position={"absolute"} left={0} right={0} zIndex={3}>
        <LinearGradient
          colors={["black", "transparent"]}
          style={{ flex: 1, padding: 12 }}
          start={{ x: 0, y: 0.1 }}
          end={{ x: 0.1, y: 1.5 }}
          {..._gradient}
        >
          <Typography.RobotoBold
            textTransform={"uppercase"}
            color="white"
            fontSize="sm"
            shadow={4}
            {..._title}
          >
            {title}
          </Typography.RobotoBold>
        </LinearGradient>
      </Box>
    </VStack>
  );
}

export default FadeWrapper;
