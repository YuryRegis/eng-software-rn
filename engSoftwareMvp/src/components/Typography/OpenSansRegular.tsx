import React from "react";
import { Text, ITextProps } from "native-base";

function OpenSansRegular({ children, ...rest }: ITextProps) {
  return (
    <Text fontFamily="placeholder" color="white" fontSize="xs" {...rest}>
      {children}
    </Text>
  );
}

export default OpenSansRegular;
