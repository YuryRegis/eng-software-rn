import React from "react";
import { Circle, HStack } from "native-base";

import { Typography } from "../../../../components";
import { MENTOR_LIST_STRINGS, IMentorListStrings } from "../../../../language";
import { useLocale } from "../../../../hooks";

function Status({ stauts }) {
  const { locale } = useLocale();
  const strings: IMentorListStrings = MENTOR_LIST_STRINGS[locale];

  const color = getStatusColor(stauts);

  function getStatusColor(status: string) {
    switch (status) {
      case "online":
        return "green.300";
      case "offline":
        return "gray.300";
      default:
        return "orange.300";
    }
  }

  return (
    <HStack justifyContent="center" alignItems="center">
      <Circle mr={1} size={2.5} bg={color} />

      <Typography.OpenSansBold fontSize="ls" color={color}>
        {strings.card.status[stauts]}
      </Typography.OpenSansBold>
    </HStack>
  );
}

export default Status;
