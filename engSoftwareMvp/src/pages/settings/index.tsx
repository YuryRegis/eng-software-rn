import React from "react";
import { useNavigation } from "@react-navigation/native";
import { VStack, ScrollView, HStack, Box } from "native-base";

import {
  Header,
  Typography,
  ScreenWrapper,
  Button,
  ToggleButton,
} from "../../components";
import { SETTINGS_STRINGS, ISettingsStrings } from "../../language";
import { useLocale } from "../../hooks";

function Settings() {
  const { locale } = useLocale();
  const { navigate } = useNavigation();
  const strings: ISettingsStrings = SETTINGS_STRINGS[locale];

  return (
    <ScreenWrapper>
      <ScrollView flex={1} mt="8">
        <Header title={strings.title} />

        <VStack flex={1} p="8">
          <Typography.OpenSansBold mt="8" fontSize="md">
            {strings.userName}
          </Typography.OpenSansBold>

          <Typography.OpenSansRegular mt="2" fontSize="sm">
            Fulano da Silva Sauro
          </Typography.OpenSansRegular>

          <Typography.OpenSansBold mt="8" fontSize="md">
            {strings.email}
          </Typography.OpenSansBold>

          <Typography.OpenSansRegular mt="2" fontSize="sm">
            fulano@mail.com
          </Typography.OpenSansRegular>

          <HStack
            mt="8"
            w="100%"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography.OpenSansBold fontSize="md">
              {strings.toggles.notifications}
            </Typography.OpenSansBold>

            <ToggleButton />
          </HStack>

          <HStack
            mt="4"
            w="100%"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography.OpenSansBold fontSize="md">
              {strings.toggles.email}
            </Typography.OpenSansBold>

            <ToggleButton />
          </HStack>

          <VStack space={2} mt="8">
            <Button
              outLine
              title={strings.buttons.changePassword}
              onPress={() => navigate("ChangePassword")}
            />

            <Button outLine title={strings.buttons.changeContact} />

            <Button outLine title={strings.buttons.deleteAccount} />
          </VStack>

          <VStack mt="8" w="100%" alignItems="center">
            <Box
              w="220"
              borderTopWidth="2"
              alignItems="center"
              borderColor="gray.300"
            >
              <Typography.OpenSansBold mt="2" fontSize="lg">
                {strings.mentor}
              </Typography.OpenSansBold>
            </Box>
          </VStack>

          <HStack
            mt="8"
            w="100%"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography.OpenSansBold fontSize="ls">
              {strings.toggles.schedule}
            </Typography.OpenSansBold>

            <ToggleButton />
          </HStack>
        </VStack>
      </ScrollView>
    </ScreenWrapper>
  );
}

export default Settings;
