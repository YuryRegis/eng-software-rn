import React from "react";
import { VStack, Pressable, Box, Center } from "native-base";

import { useLocale } from "../../../hooks";
import { Typography } from "../../../components";
import { MY_SCHEDULE_STRINGS, IMyScheduleStrings } from "../../../language";

interface IPopoverContent {
  status: string;
}

function PopoverContent({ status }) {
  const { locale } = useLocale();
  const strings: IMyScheduleStrings = MY_SCHEDULE_STRINGS[locale];
  return (
    <VStack minW={150}>
      <Pressable>
        <Center>
          <Typography.RobotoBold fontSize="ls" color="primary.500">
            {status === "confirmed"
              ? strings.tooltip.cancel
              : strings.tooltip.solicitation}
          </Typography.RobotoBold>
        </Center>
      </Pressable>

      <Center>
        <Box m="2" bg="gray.100" w="60%" h={0.9} />
      </Center>

      <Pressable>
        <Center>
          <Typography.RobotoBold fontSize="ls" color="primary.500">
            {strings.tooltip.changeSchedule}
          </Typography.RobotoBold>
        </Center>
      </Pressable>
    </VStack>
  );
}

export default PopoverContent;
