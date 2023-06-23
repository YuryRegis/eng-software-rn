import React, { useEffect } from "react";
// import { LinearGradient } from "expo-linear-gradient";
import {
  Box,
  IBoxProps,
  Image,
  IImageProps,
  HStack,
  VStack,
} from "native-base";

import { useNavigation } from "@react-navigation/native";
import { Typography, FadeWrapper, Button } from "../../../../components";

interface ICourseCardProps extends IBoxProps {
  _image?: IImageProps;
  _container?: IBoxProps;
  url?: string;
  item: any;
}

function CourseCard({
  url,
  item,
  _image,
  _container,
  ...rest
}: ICourseCardProps) {
  const { navigate } = useNavigation();

  return (
    <Box bg="primary.300" rounded={8} overflow="hidden" {...rest}>
      <FadeWrapper title={item.name}>
        <Image
          source={{
            uri: url ? url : item?.image,
          }}
          alt={item && item.name}
          bg="gray.300"
          w="100%"
          h={120}
          {..._image}
        />
      </FadeWrapper>

      <Box p={4} {..._container}>
        <HStack justifyContent="space-between">
          <VStack>
            <HStack space={1}>
              <Typography.OpenSansBold fontSize="sm">
                {item?.mentors}
              </Typography.OpenSansBold>

              <Typography.OpenSansRegular fontSize="sm">
                profissionais cadastrados
              </Typography.OpenSansRegular>
            </HStack>

            <HStack space={1}>
              <Typography.OpenSansBold fontSize="sm">
                {item?.classes}
              </Typography.OpenSansBold>

              <Typography.OpenSansRegular fontSize="sm">
                ofertas registradas
              </Typography.OpenSansRegular>
            </HStack>
          </VStack>

          <Button
            upperCase
            title="profissionais"
            _text={{ fontSize: "xs", fontFamily: "inputLabel" }}
            onPress={() => navigate("MentorList", { course: item })}
          />
        </HStack>
      </Box>
    </Box>
  );
}

export default CourseCard;
