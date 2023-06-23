import React from "react";
import { FlatList } from "react-native";
import { Box, Select, ISelectProps } from "native-base";
import { Controller, ControllerProps } from "react-hook-form";

import * as Typography from "../Typography";

interface ISelectInputProps extends ISelectProps {
  items: any[];
  name: string;
  title?: string | React.ReactNode;
  control: ControllerProps["control"];
  errorMessage?: string | React.ReactNode;
}

function SelectInput({
  name,
  items,
  title,
  control,
  errorMessage,
  ...rest
}: ISelectInputProps) {
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
          <Select
            h={39}
            fontSize="md"
            selectedValue={value}
            onValueChange={(itemValue: string) => {
              onChange(itemValue);
            }}
            bg={errorMessage ? "yellow.100" : "gray.100"}
            {...rest}
          >
            {items.map((item) => (
              <Select.Item key={item} value={item} label={item} />
            ))}
          </Select>
        )}
      />

      {Boolean(errorMessage) && (
        <Typography.RobotoLight mt={2} fontSize="md" color="pink.400">
          {errorMessage}
        </Typography.RobotoLight>
      )}
    </Box>
  );
}

export default SelectInput;
