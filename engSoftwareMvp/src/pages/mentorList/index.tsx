import React from "react";
import { FlatList, Box, VStack } from "native-base";
import { useNavigation, useRoute } from "@react-navigation/native";

import { MentorCard } from "./Components";
import { IUser, users } from "../home/DAO/users";
import { ScreenWrapper, Header } from "../../components";

function MentorList() {
  const { params } = useRoute();

  return (
    <ScreenWrapper>
      <Header goBackBtn _center={{ ml: -4 }} title={params?.course?.name} />

      <VStack p={4}>
        <FlatList
          data={users}
          ListFooterComponent={<Box h={20} />}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item: IUser) => `${item.id}`}
          ItemSeparatorComponent={() => <Box h={4} />}
          renderItem={({ item }) => <MentorCard user={item} />}
        />
      </VStack>
    </ScreenWrapper>
  );
}

export default MentorList;
