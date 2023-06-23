import React from "react";
import { Text, ITextProps } from "native-base";

function RobotoBold({ children, ...rest }: ITextProps) {
  return (
    <Text fontFamily="heading" color="white" fontSize="xs" {...rest}>
      {children}
    </Text>
  );
}

export default RobotoBold;
