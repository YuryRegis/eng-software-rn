import React from "react";
import { Input as NativeBaseInput, IInputProps } from "native-base";

function Input({ ...rest }: IInputProps) {
  return (
    <NativeBaseInput
      bg="gray.100"
      h={39}
      size="md"
      borderWidth={0}
      fontSize="md"
      fontFamily="placeholder"
      color="primary.700"
      placeholderTextColor="gray.300"
      _focus={{
        borderWidth: 2,
        borderColor: "secondary.700",
        bg: "gray.100",
      }}
      {...rest}
    />
  );
}

export default Input;
