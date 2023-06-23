import React from "react";
import { Text, ITextProps } from "native-base";

function OpenSansBold({ children, ...rest }: ITextProps) {
  return (
    <Text fontFamily="inputLabel" color="white" fontSize="xs" {...rest}>
      {children}
    </Text>
  );
}

export default OpenSansBold;
