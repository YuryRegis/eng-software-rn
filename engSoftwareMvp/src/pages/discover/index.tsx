import React from "react";
import { FlatList, VStack } from "native-base";

import { Header, ScreenWrapper, Typography } from "../../components";
import { CourseCard, HeaderComponent, EmptyComponent } from "./components";
import { Tags, ITags } from "../home/DAO/tags";

import { subjects$, getSubjects } from "../../store/discover.store";

function Discover() {
  // const [data, setData] = React.useState(Tags);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    getSubjects("");
    const discoverData = subjects$.subscribe((data) => {
      setData(data);
    });
    return () => {
      discoverData.unsubscribe();
    };
  }, []);

  return (
    <ScreenWrapper>
      <Header />

      <VStack px={4}>
        <FlatList
          renderItem={({ item }) => <CourseCard item={item} />}
          ItemSeparatorComponent={() => <VStack h={4} />}
          contentContainerStyle={{
            shadowOffset: { height: 0, width: 1 },
            paddingHorizontal: 3,
            shadowColor: "black",
            shadowOpacity: 0.3,
            elevation: 3,
          }}
          ListFooterComponent={() => <VStack h={50} />}
          ListEmptyComponent={() => <EmptyComponent />}
          ListHeaderComponent={() => <HeaderComponent />}
          // ListHeaderComponent={() => <HeaderComponent callback={onSearch} />}
          keyExtractor={({ id, name }) => `${name}-${id}`}
          showsVerticalScrollIndicator={false}
          data={data}
        />
      </VStack>
    </ScreenWrapper>
  );
}

export default Discover;
