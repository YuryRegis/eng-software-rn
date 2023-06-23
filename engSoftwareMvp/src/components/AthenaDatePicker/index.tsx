import React from "react";
import { VStack, Pressable } from "native-base";
import { Platform } from "react-native";
import { Controller, ControllerProps } from "react-hook-form";
import DatePicker from "react-native-datepicker";
import DateTimePicker from "@react-native-community/datetimepicker";

import THEME from "../../design/athena";
import * as Typography from "../Typography";

function AthenaDatePicker({ name, control, errorMessage, show, cb, ...rest }) {
  const { colors } = THEME;

  const today = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear() - 18;
  Platform.OS === "ios";
  return (
    <VStack space={2}>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value = new Date() } }) =>
          Platform.OS === "ios" ? (
            <DatePicker
              mode="date"
              date={value}
              format="YYYY-MM-DD"
              minDate={`1872-01-01`}
              onDateChange={onChange}
              style={{ width: "100%" }}
              maxDate={`${year}-${month}-${today}`}
              customStyles={{
                dateIcon: { display: "none" },
                dateInput: {
                  alignItems: "flex-start",
                  color: colors.gray[500],
                  backgroundColor: colors.gray[100],
                  paddingLeft: 10,
                  borderRadius: 4,
                  borderWidth: 0,
                },
              }}
              {...rest}
            />
          ) : (
            <VStack>
              <Pressable
                p="3"
                w="100%"
                bg="gray.100"
                borderRadius={4}
                onPress={() => cb()}
              >
                <Typography.OpenSansBold fontSize="md" color="gray.500">
                  {`${value}`}
                </Typography.OpenSansBold>
              </Pressable>
              {Boolean(show) && (
                <DateTimePicker
                  mode="date"
                  dateFormat="day month year"
                  onTouchEnd={() => cb()}
                  onTouchEndCapture={() => cb()}
                  onChange={(v) => onChange(new Date(v as unknown as Date))}
                  value={value}
                  style={{ width: "100%" }}
                />
              )}
            </VStack>
          )
        }
      />

      {Boolean(errorMessage) && (
        <Typography.RobotoLight my={2} fontSize="md" color="pink.400">
          {errorMessage}
        </Typography.RobotoLight>
      )}
    </VStack>
  );
}

export default AthenaDatePicker;
