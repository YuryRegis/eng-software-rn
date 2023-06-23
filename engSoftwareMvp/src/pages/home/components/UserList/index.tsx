import React from "react";
import { FlatList } from "react-native";
import { HStack } from "native-base";

import UserCard from "../../components/UserCard";
import { users as usersDao, IUser } from "../../DAO/users";

type FlatListDataProps = {
  item?: IUser;
  index?: number;
};

function itemHandler({ item }: FlatListDataProps) {
  return <UserCard user={item} />;
}

function UserList() {
  return (
    <FlatList
      horizontal
      data={usersDao}
      renderItem={itemHandler}
      ItemSeparatorComponent={() => <HStack w="7" />}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => `${item.id}_${item.fullName}`}
    />
  );
}

export default UserList;
