import React from "react";
import { TouchableOpacity } from "react-native";
import { Box } from "native-base";

import { Typography } from "../../../../components";

function ScheduleCard({ ...rest }) {
  return (
    <TouchableOpacity {...rest}>
      <Box
        justifyContent="center"
        alignItems="center"
        borderRadius={8}
        bg="gray.300"
        w="100%"
        mb="2"
        p="4"
      >
        <Typography.OpenSansRegular fontSize={"lg"}>
          12/12/2022 - 23:00
        </Typography.OpenSansRegular>
      </Box>
    </TouchableOpacity>
  );
}

export default ScheduleCard;
