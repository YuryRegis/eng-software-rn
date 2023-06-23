import React from "react";
import { VStack } from "native-base";

import { IUser } from "../../DAO/users";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Avatar, Typography } from "../../../../components";

interface IUserCard extends React.PropsWithChildren<{}> {
  user: IUser;
}

function UserCard({ user }: IUserCard) {
  const { navigate } = useNavigation();

  function handleMentorNavigation() {
    navigate("MentorDetail", { mentor: user });
  }

  return (
    <TouchableOpacity onPress={handleMentorNavigation}>
      <VStack alignItems={"center"} w="90">
        <Avatar user={user} />
        <VStack alignItems="center">
          <Typography.RobotoBold
            textAlign="center"
            textTransform="capitalize"
            fontSize="8"
            mt="2"
          >
            {user.fullName}
          </Typography.RobotoBold>
          <Typography.RobotoLight
            textAlign="center"
            textTransform="uppercase"
            h={25}
          >
            {user.course}
          </Typography.RobotoLight>
        </VStack>
      </VStack>
    </TouchableOpacity>
  );
}

export default UserCard;
