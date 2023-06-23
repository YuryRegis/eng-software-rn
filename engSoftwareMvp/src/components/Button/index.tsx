import { memo } from "react";
import {
  Button as ButtonNativeBase,
  IButtonProps,
  ITextProps,
} from "native-base";

import * as Typography from "../../components/Typography";
import { _Text } from "react-native";

type Props = IButtonProps & {
  title: string;
  upperCase?: boolean;
  outLine?: boolean;
  _text?: ITextProps;
};

function Button({
  title,
  upperCase,
  outLine,
  disabled,
  _text,
  ...rest
}: Props) {
  return (
    <ButtonNativeBase
      size="sm"
      rounded="sm"
      fontSize="sm"
      borderWidth={2}
      disabled={disabled}
      borderColor={disabled ? "gray.300" : "secondary.700"}
      bg={outLine ? "transparent" : disabled ? "gray.300" : "secondary.700"}
      _pressed={
        outLine
          ? { bg: "secondary.700" }
          : { bg: "transparent", borderWidth: 2, borderColor: "secondary.700" }
      }
      {...rest}
    >
      <Typography.RobotoBold
        textTransform={upperCase ? "uppercase" : "none"}
        fontSize="sm"
        {..._text}
      >
        {title}
      </Typography.RobotoBold>
    </ButtonNativeBase>
  );
}

export default memo(Button);
