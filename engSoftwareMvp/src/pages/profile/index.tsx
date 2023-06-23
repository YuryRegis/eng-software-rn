import React from "react";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { HStack, Box, ScrollView, Icon } from "native-base";

import { useLocale } from "../../hooks";
import { users } from "../home/DAO/users";
import { PROFILE_STRINGS, IProfileStrings } from "../../language";
import { Typography, Header, ScreenWrapper, Avatar } from "../../components";

function Profile() {
  const { locale } = useLocale();
  const { navigate } = useNavigation();
  const strings: IProfileStrings = PROFILE_STRINGS[locale];
  const user = users[2];

  return (
    <ScreenWrapper>
      <ScrollView p="4">
        <Header title={strings.title} />

        <HStack mt="8" p="4" justifyContent="space-between" alignItems="center">
          <Typography.RobotoBold
            maxW={200}
            fontSize="lg"
            color="gray.100"
            textTransform="uppercase"
          >
            {user.fullName}
          </Typography.RobotoBold>

          <Avatar
            user={user}
            onPress={() => navigate("EditProfile", { user })}
            button={
              <Icon
                as={<Entypo name="pencil" />}
                color="secondary.500"
                size="md"
                ml="1"
              />
            }
          />
        </HStack>

        <Box p="4">
          <Typography.OpenSansRegular
            fontSize="sm"
            color="gray.100"
            textAlign="justify"
            textTransform="uppercase"
          >
            {`"${user.profileDescription}"`}
          </Typography.OpenSansRegular>
        </Box>
      </ScrollView>
    </ScreenWrapper>
  );
}

export default Profile;
