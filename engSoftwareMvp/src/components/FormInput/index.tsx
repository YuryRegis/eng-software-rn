import React from "react";
import { Controller, ControllerProps } from "react-hook-form";
import { Box, IInputProps } from "native-base";

import Input from "../Input";
import * as Typography from "../Typography";

export interface IFormInputProps extends IInputProps {
  name: string;
  title?: string | React.ReactNode;
  control: ControllerProps["control"];
  errorMessage?: string | React.ReactNode;
}

function FormInput({
  name,
  title,
  control,
  errorMessage,
  ...rest
}: IFormInputProps) {
  return (
    <Box w="100%">
      {Boolean(title) && (
        <Typography.RobotoBold mb={2} fontSize="md" color="gray.100">
          {title}
        </Typography.RobotoBold>
      )}

      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            value={value}
            onBlur={onBlur}
            autoCapitalize="none"
            onChangeText={onChange}
            bg={errorMessage ? "yellow.100" : "gray.100"}
            _focus={{
              borderWidth: 2,
              borderColor: errorMessage ? "red.600" : "blue.300",
              bg: "gray.100",
            }}
            {...rest}
          />
        )}
      />

      {Boolean(errorMessage) && (
        <Typography.RobotoLight my={2} fontSize="md" color="pink.400">
          {errorMessage}
        </Typography.RobotoLight>
      )}
    </Box>
  );
}

export default FormInput;
