import React from "react";
import { VStack } from "native-base";
import { useRoute } from "@react-navigation/native";

import { IUser } from "../home/DAO/users";
import { Head, Body } from "./components";
import { Header, ScreenWrapper } from "../../components";

interface IMentorDetailsParams {
  key: string;
  name: string;
  params: {
    mentor: IUser;
  };
}

function MentorDetail() {
  const { params }: IMentorDetailsParams = useRoute();

  return (
    <ScreenWrapper>
      <Header goBackBtn />
      <VStack>
        <Head mentor={params.mentor} />
        <Body />
      </VStack>
    </ScreenWrapper>
  );
}

export default MentorDetail;
