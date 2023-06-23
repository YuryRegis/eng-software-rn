import React from "react";
import { Box, useDisclose } from "native-base";

import ScheduleCard from "../ScheduleCard";
import { Typography, ModalConfirmation } from "../../../../components";
import { useLocale } from "../../../../hooks";
import {
  MENTOR_DETAIL_STRINGS,
  IMentorDetailStrings,
} from "../../../../language";

function Body() {
  const { locale } = useLocale();
  const modalScheduleConfirmationActions = useDisclose();
  const strings: IMentorDetailStrings = MENTOR_DETAIL_STRINGS[locale];

  return (
    <Box p="4" w="100%">
      <Typography.OpenSansRegular mb="2" fontSize={"lg"}>
        {strings.title.availableTime}
      </Typography.OpenSansRegular>

      <ScheduleCard onPress={modalScheduleConfirmationActions.onOpen} />
      <ScheduleCard onPress={modalScheduleConfirmationActions.onOpen} />
      <ScheduleCard onPress={modalScheduleConfirmationActions.onOpen} />

      <ModalConfirmation
        cancelTitleBtn={strings.modalConfirmationSchedule.button.cancel}
        confirmTitleBtn={strings.modalConfirmationSchedule.button.confirm}
        title={strings.modalConfirmationSchedule.title}
        isOpen={modalScheduleConfirmationActions.isOpen}
        onCancel={modalScheduleConfirmationActions.onClose}
      >
        12/12/2022 - 23:00
      </ModalConfirmation>
    </Box>
  );
}

export default Body;
