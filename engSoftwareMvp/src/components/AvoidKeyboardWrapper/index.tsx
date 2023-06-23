import React, { PropsWithChildren } from "react";
import { useTheme, VStack, IStackProps } from "native-base";
import { KeyboardAvoidingView, Platform } from "react-native";

export interface IAvoidKeyboardWrapperProps extends PropsWithChildren {
  _container?: IStackProps;
}

function AvoidKeyboardWrapper({
  _container,
  children,
  ...rest
}: IAvoidKeyboardWrapperProps) {
  const { colors } = useTheme();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}
      {...rest}
    >
      <VStack flex={1} {..._container}>
        {children}
      </VStack>
    </KeyboardAvoidingView>
  );
}

export default AvoidKeyboardWrapper;
