import React from "react";
import { VStack } from "native-base";

import TagList from "../TagList";
import { useLocale } from "../../../../hooks";
import { Input, Typography } from "../../../../components";
import { HOME_STRINGS, IHomeStrings } from "../../../../language";

function Boddy() {
  const { locale } = useLocale();
  const strings: IHomeStrings = HOME_STRINGS[locale];

  return (
    <VStack px={4}>
      {/* <Typography.OpenSansBold marginTop="4" fontSize="md">
        {strings.searchBox.label}
      </Typography.OpenSansBold>
      <Input marginY="2" placeholder={strings.searchBox.placeHolder} /> */}
      <TagList />
    </VStack>
  );
}

export default Boddy;
