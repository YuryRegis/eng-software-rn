import React from "react";
import { Box, Radio, IRadioProps } from "native-base";
import { Controller, ControllerProps } from "react-hook-form";

import * as Typography from "../Typography";

export interface IRadioGroupProps extends IRadioProps {
  name: string;
  children: React.ReactNode;
  value: IRadioProps["value"];
  title?: string | React.ReactNode;
  control: ControllerProps["control"];
  errorMessage?: string | React.ReactNode;
}

function RadioGroup({
  name,
  title,
  control,
  children,
  errorMessage,
  ...rest
}: IRadioGroupProps) {
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
        render={({ field: { onChange, value } }) => (
          <Radio.Group name={name} value={value} onChange={onChange} {...rest}>
            <Box rounded="md" bg={errorMessage && "red.400"} w="100%">
              {children}
            </Box>
          </Radio.Group>
        )}
      />

      {Boolean(errorMessage) && (
        <Typography.RobotoLight fontSize="md" color="pink.400">
          {errorMessage}
        </Typography.RobotoLight>
      )}
    </Box>
  );
}

export default RadioGroup;
