import React from "react";
import {
  IAvatarProps,
  IBadgeProps,
  Pressable,
  VStack,
  Center,
  Avatar as NativeAvatar,
} from "native-base";

import * as Typography from "../Typography";
import { IUser } from "../../pages/home/DAO/users";

interface IAvatar extends IAvatarProps {
  user?: IUser;
  onPress?: () => void;
  _defaultSize?: number;
  _button?: IBadgeProps;
  button?: React.ReactNode;
}

const defaultImage =
  "https://static.vecteezy.com/system/resources/thumbnails/004/511/281/small/default-avatar-photo-placeholder-profile-picture-vector.jpg";

function Avatar({
  user,
  button,
  _button,
  onPress,
  _defaultSize = 88,
  ...rest
}: IAvatar) {
  return (
    <NativeAvatar
      source={{ uri: Boolean(user) ? user.avatar : defaultImage }}
      aria-label="user avatar"
      bg="gray.300"
      size="xl"
      {...rest}
    >
      <Typography.RobotoBold fontSize="xl">
        {Boolean(user) &&
          user.fullName
            .split(" ")
            .map((name) => name[0])
            .join("")}
      </Typography.RobotoBold>

      {Boolean(button) && (
        <NativeAvatar.Badge
          borderColor={"gray.100"}
          bg={"gray.100"}
          {..._button}
        >
          <Pressable onPress={onPress}>
            <Center>{button}</Center>
          </Pressable>
        </NativeAvatar.Badge>
      )}
    </NativeAvatar>
  );
}

export default Avatar;
