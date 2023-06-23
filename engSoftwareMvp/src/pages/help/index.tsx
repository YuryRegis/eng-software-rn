import React from "react";
import { VStack, ScrollView, Image, HStack } from "native-base";
import { useRoute } from "@react-navigation/native";
import { Header, Typography, ScreenWrapper } from "../../components";
import { HELP_STRINGS, IHelpStrings } from "../../language";

import { useLocale } from "../../hooks";
const Logo = require("../../icons/icon.png");

function Help() {
  const { params } = useRoute();
  const { locale } = useLocale();
  const strings: IHelpStrings = HELP_STRINGS[locale];
  return (
    <ScreenWrapper>
      <Header goBackBtn={params?.goBack} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack alignItems="center" px="8" py="8">
          <VStack>
            <HStack alignItems="center">
              <Image source={Logo} width={70} height={70} />
              <Typography.RobotoBold fontSize="24" ml="4">
                YOUR LOGO HERE
              </Typography.RobotoBold>
            </HStack>
          </VStack>
          <Typography.RobotoBold textTransform="uppercase" fontSize="24" my="8">
            {strings.title}
          </Typography.RobotoBold>
          <Typography.OpenSansRegular fontSize="ls" textTransform="uppercase">
            {strings.description}
          </Typography.OpenSansRegular>
        </VStack>
      </ScrollView>
    </ScreenWrapper>
  );
}

export default Help;
