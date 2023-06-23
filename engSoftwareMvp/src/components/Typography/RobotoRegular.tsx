import React from "react";
import { Text, ITextProps } from "native-base";

function RobotoRegular({ children, ...rest }: ITextProps) {
  return (
    <Text fontFamily="body" color="white" fontSize="xs" {...rest}>
      {children}
    </Text>
  );
}

export default RobotoRegular;
