import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { ActivityIndicator } from "react-native";
import { Icon, VStack, Pressable } from "native-base";

import { useLocale } from "../../../../hooks";
import { Input, Typography } from "../../../../components";
import { DISCOVER_STRINGS, IDiscoverStrings } from "../../../../language";
import { getSubjects } from "../../../../store/discover.store";

function HeaderComponent({}) {
  const { locale } = useLocale();
  const [search, setSearch] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const strings: IDiscoverStrings = DISCOVER_STRINGS[locale];

  function onSearch() {
    if (search === "") return;
    // setIsLoading(true);
    getSubjects(search);
  }

  return (
    <VStack my={4}>
      <Typography.OpenSansBold fontSize="md">
        {strings.header.input.title}
      </Typography.OpenSansBold>
      <Input
        marginY="2"
        defaultValue=""
        isDisabled={isLoading}
        onChangeText={setSearch}
        onEndEditing={onSearch}
        placeholder={strings.header.input.placeholder}
        InputRightElement={
          isLoading ? (
            <ActivityIndicator
              size="small"
              color="white"
              style={{ marginEnd: 18 }}
            />
          ) : (
            <Pressable onPress={onSearch}>
              <Icon
                as={<Ionicons name="search" />}
                color="primary.500"
                size="md"
                mx="4"
              />
            </Pressable>
          )
        }
      />
    </VStack>
  );
}

export default HeaderComponent;
