import React from "react";
import AppLink from "react-native-app-link";
import { Box, HStack, Avatar, Center } from "native-base";

import Status from "./Status";
import SubjectList from "./SubjectList";
import { useLocale } from "../../../../hooks";
import { IUser } from "../../../home/DAO/users";
import { Button, Typography } from "../../../../components";
import { MENTOR_LIST_STRINGS, IMentorListStrings } from "../../../../language";

export interface IMentorCardProps {
  user: IUser;
}

function MentorCard({ user }: IMentorCardProps) {
  const { locale } = useLocale();
  const strings: IMentorListStrings = MENTOR_LIST_STRINGS[locale];

  function handleButtonPress() {
    AppLink.maybeOpenURL("https://meet.jit.si/athena-rn", {
      appStoreLocale: "us",
      appName: "Jitsi Meet",
      appStoreId: "org.jitsi.meet",
      playStoreId: "org.jitsi.meet",
    });
  }

  return (
    <Box flex={1} mx={1} rounded={8} shadow={4} bg="primary.500" p={4}>
      <HStack flex={1} mb={2}>
        <Center>
          <Avatar height={16} width={16} source={{ uri: user.avatar }} />
        </Center>

        <HStack flex={1} py={2} pl={4}>
          <Box flex={1}>
            <HStack w="100%" justifyContent="space-between">
              <Typography.OpenSansRegular fontSize="ls">
                {user?.course}
              </Typography.OpenSansRegular>

              <Status stauts={user?.status} />
            </HStack>

            <Typography.OpenSansBold fontSize="md">
              {user?.fullName}
            </Typography.OpenSansBold>
          </Box>
        </HStack>
      </HStack>

      <Box my={2} flex={1}>
        <Typography.OpenSansRegular color="gray.100" fontSize="md">
          {strings.message}
        </Typography.OpenSansRegular>
      </Box>

      <SubjectList subjects={user.tags} />

      <Center>
        <Button
          mt={2}
          upperCase
          minW={200}
          title={strings.button}
          onPress={handleButtonPress}
          disabled={user.status !== "online"}
        />
      </Center>
    </Box>
  );
}

export default MentorCard;
