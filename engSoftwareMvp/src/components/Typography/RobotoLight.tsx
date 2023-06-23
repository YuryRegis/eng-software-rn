import React from "react";
import { Text, ITextProps } from "native-base";

function RobotoLight({ children, ...rest }: ITextProps) {
  return (
    <Text fontFamily="thin" color="white" fontSize="xs" {...rest}>
      {children}
    </Text>
  );
}

export default RobotoLight;
