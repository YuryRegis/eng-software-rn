import React from "react";
import { CaretLeft } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar, Platform, TouchableOpacity } from "react-native";
import {
  HStack,
  Heading,
  useTheme,
  IconButton,
  StyledProps,
  IStackProps,
} from "native-base";

import * as Typography from "../Typography";
import { useLocale } from "../../hooks";
import { HEADER_STRINGS, IHeaderStrings } from "../../language";

interface IStyledProps extends StyledProps {
  title?: string;
  helpBtn?: boolean;
  goBackBtn?: boolean;
  _left?: IStackProps;
  _right?: IStackProps;
  _center?: IStackProps;
  leftContent?: JSX.Element;
  rightContent?: JSX.Element;
  centerContent?: JSX.Element;
  callBack?: () => void;
}

function Header({
  title,
  _left,
  _right,
  _center,
  helpBtn,
  callBack,
  goBackBtn,
  leftContent,
  rightContent,
  centerContent,
  ...rest
}: IStyledProps) {
  const { colors } = useTheme();
  const { locale } = useLocale();
  const { goBack, navigate } = useNavigation();

  const isAndroid = Platform.OS === "android";
  const strings: IHeaderStrings = HEADER_STRINGS[locale];

  function handleHelpNavigation() {
    navigate("Help", { goBack: true });
  }

  return (
    <HStack
      alignItems="center"
      justifyContent="space-between"
      mt={isAndroid ? `${StatusBar.currentHeight + 4}px` : 0}
      {...rest}
    >
      {/* LEFT CONTENT */}
      <HStack alignItems="center" {..._left}>
        {Boolean(goBackBtn) && (
          <IconButton
            icon={<CaretLeft size={24} color={colors.gray[200]} />}
            onPress={goBack}
          />
        )}

        {Boolean(leftContent) && leftContent}
      </HStack>

      {/* CENTER CONTENT */}
      <HStack alignItems="center" {..._center}>
        {Boolean(title) && (
          <Heading
            ml={!Boolean(goBackBtn) && !Boolean(centerContent) ? "4" : "-6"}
            color="gray.100"
            fontSize="lg"
          >
            {title}
          </Heading>
        )}

        {Boolean(centerContent) && centerContent}
      </HStack>

      {/* RIGHT CONTENT */}
      <HStack alignItems="center" mr={4} {..._right}>
        {Boolean(helpBtn) && (
          <TouchableOpacity onPress={handleHelpNavigation}>
            <Typography.RobotoBold
              fontSize="md"
              color="gray.100"
              textTransform={"uppercase"}
            >
              {strings.helpButton}
            </Typography.RobotoBold>
          </TouchableOpacity>
        )}

        {Boolean(rightContent) && rightContent}
      </HStack>
    </HStack>
  );
}

export default Header;
