import React from "react";
import { Box, HStack } from "native-base";

import { IUser } from "../../../home/DAO/users";
import { Typography, Avatar } from "../../../../components";

interface IHeadProps {
  mentor: IUser;
}

function Head({ mentor }: IHeadProps) {
  return (
    <Box alignItems="center" w="100%" p="4">
      <HStack justifyContent="space-between" w="100%" px="4">
        <Box justifyContent="flex-end" maxW={250}>
          <Typography.OpenSansRegular fontSize={"lg"}>
            {mentor.fullName}
          </Typography.OpenSansRegular>
          <Typography.OpenSansRegular fontSize={"md"}>
            Hora aula: R$ 40,00
          </Typography.OpenSansRegular>
        </Box>
        <Box>
          <Avatar user={mentor} />
        </Box>
      </HStack>

      <Box mt="4" p="4" bgColor="scondary.500" width="100%">
        <Typography.OpenSansRegular fontSize={"ls"}>
          " {mentor.profileDescription} "
        </Typography.OpenSansRegular>
      </Box>
    </Box>
  );
}

export default Head;
