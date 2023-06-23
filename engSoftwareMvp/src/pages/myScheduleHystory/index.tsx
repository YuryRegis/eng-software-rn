import React from "react";
import { FlatList, HStack, VStack, Icon, Center } from "native-base";
import { Entypo } from "@expo/vector-icons";

import {
  Header,
  Typography,
  ScreenWrapper,
  Button,
  PopOver,
} from "../../components";
import { getStatusColor } from "./utils";
import { useLocale } from "../../hooks";
import { scheduleDAO } from "./DAO";
import {
  MY_SCHEDULE_STRINGS,
  IMyScheduleStrings,
  weekDay,
} from "../../language";

function MyScheduleHistory() {
  const { locale } = useLocale();
  const strings: IMyScheduleStrings = MY_SCHEDULE_STRINGS[locale];

  return (
    <ScreenWrapper>
      <Header title={strings.title.myScheduleHistory} goBackBtn />

      <VStack flex={1} alignItems="center" px="4" py="8">
        <FlatList
          data={scheduleDAO}
          renderItem={({ item }) => {
            return (
              <VStack p="4" borderRadius="8" bg="primary.500" shadow="3">
                <HStack w="100%" justifyContent="space-between">
                  <Typography.OpenSansBold
                    color={getStatusColor(item.status)}
                    fontSize="ls"
                    mb="2"
                  >
                    {strings.status[item.status]}
                  </Typography.OpenSansBold>

                  {/* <PopOver _content={}> */}
                  <Icon
                    as={<Entypo name="dots-three-vertical" />}
                    color="gray.400"
                  />
                  {/* </PopOver> */}
                </HStack>

                <Typography.RobotoBold
                  fontSize="md"
                  color="gray.100"
                  textTransform="uppercase"
                >
                  {`${item.start} (${weekDay[locale][item.weekDay]})`}
                </Typography.RobotoBold>

                <Typography.RobotoRegular
                  fontSize="md"
                  color="gray.100"
                  textTransform="uppercase"
                >
                  {item.title}
                </Typography.RobotoRegular>

                <Typography.RobotoLight fontSize="md" color="gray.100">
                  {item.mentor}
                </Typography.RobotoLight>
              </VStack>
            );
          }}
          ItemSeparatorComponent={() => <VStack h="4" />}
          keyExtractor={({ title, id }) => `${title}-${id}`}
          contentContainerStyle={{
            flex: 1,
            maxWidth: "100%",
            paddingHorizontal: 3,
          }}
        />
      </VStack>
    </ScreenWrapper>
  );
}

export default MyScheduleHistory;
