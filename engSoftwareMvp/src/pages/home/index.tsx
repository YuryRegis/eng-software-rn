import React from "react";
import { VStack, ScrollView } from "native-base";

import { Head, Boddy, UserList } from "./components";
import { Header, ScreenWrapper, AvoidKeyboardWrapper } from "../../components";

function Home() {
  return (
    <ScreenWrapper>
      <Header />
      <AvoidKeyboardWrapper>
        {/* <ScrollView> */}
        <VStack justifyContent={"center"}>
          {/* <Head /> */}
          {/* <UserList /> */}
          <Boddy />
        </VStack>
        {/* </ScrollView> */}
      </AvoidKeyboardWrapper>
    </ScreenWrapper>
  );
}

export default Home;
