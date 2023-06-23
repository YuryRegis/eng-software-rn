import React from "react";
import { VStack, FlatList } from "native-base";

import CourseCard from "../CourseCard";
import { Tags, ITags } from "../../DAO/tags";

export type FlatListDataProps = {
  item: ITags;
  index?: number;
};

function TagList() {
  return (
    <FlatList
      data={Tags}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={<VStack h="8" />}
      ListFooterComponent={<VStack h="8" />}
      contentContainerStyle={{ padding: 3 }}
      ItemSeparatorComponent={() => <VStack h="4" />}
      keyExtractor={(item) => `${item.name}-${item.id}`}
      renderItem={({ item }: FlatListDataProps) => <CourseCard item={item} />}
    />
  );
}

export default TagList;
