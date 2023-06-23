import React from "react";
import { Dimensions } from "react-native";
import { VStack, Center } from "native-base";
import LottieView from "lottie-react-native";

import { useLocale } from "../../../../hooks";
import { Typography } from "../../../../components";
import { DISCOVER_STRINGS, IDiscoverStrings } from "../../../../language";

const { height } = Dimensions.get("window");

function EmptyComponent() {
  const { locale } = useLocale();
  const strings: IDiscoverStrings = DISCOVER_STRINGS[locale];

  return (
    <VStack flex={1} h={height / 1.5}>
      <Center flex={1}>
        <LottieView
          source={require("../../../../images/emptyData.json")}
          style={{ width: 200, height: 200 }}
          autoPlay
          loop
        />

        <Typography.RobotoBold fontSize="md">
          {strings.header.empty}
        </Typography.RobotoBold>
      </Center>
    </VStack>
  );
}

export default EmptyComponent;
