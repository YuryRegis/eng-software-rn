import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import { VStack, Center, useDisclose } from "native-base";

import { useLocale } from "../../hooks";
import { changePasswordForm } from "../../schemas";
import {
  CHANGE_PASSWORD_STRINGS,
  IChangePassowrdStrings,
} from "../../language";
import {
  AvoidKeyboardWrapper,
  ModalInformation,
  ScreenWrapper,
  Typography,
  FormInput,
  Header,
  Button,
} from "../../components";

function ChangePassword() {
  const { locale } = useLocale();
  const { goBack } = useNavigation();
  const { isOpen, onOpen, onClose } = useDisclose();
  const strings: IChangePassowrdStrings = CHANGE_PASSWORD_STRINGS[locale];

  const { control, handleSubmit, formState } = useForm({
    resolver: yupResolver(changePasswordForm(strings)),
  });

  function handleChangePassword(data) {
    console.log(data);
    onOpen();
  }

  return (
    <ScreenWrapper>
      <Header goBackBtn />

      <AvoidKeyboardWrapper>
        <Center flex={1}>
          <VStack space={4} w="100%" p="8">
            <FormInput
              type="password"
              name="password"
              control={control}
              title={strings.form.password.title}
              errorMessage={formState.errors.password?.message as string}
            />

            <FormInput
              type="password"
              control={control}
              name="new-password"
              title={strings.form.newPassword.title}
              errorMessage={formState.errors["new-password"]?.message as string}
            />

            <FormInput
              type="password"
              control={control}
              name="confirm-password"
              title={strings.form.confirmPassword.title}
              errorMessage={
                formState.errors["confirm-password"]?.message as string
              }
            />

            <Center mt={4}>
              <Button
                minW={150}
                title={strings.confirmBtn}
                onPress={handleSubmit(handleChangePassword)}
              />
            </Center>
          </VStack>
        </Center>
      </AvoidKeyboardWrapper>

      <ModalInformation
        isOpen={isOpen}
        onClose={onClose}
        onConfirm={goBack}
        title={strings.modalConfirmation.title}
        confirmTitleBtn={strings.modalConfirmation.confirmBtn}
      >
        <Typography.OpenSansRegular fontSize="sm">
          {strings.modalConfirmation.message}
        </Typography.OpenSansRegular>
      </ModalInformation>
    </ScreenWrapper>
  );
}

export default ChangePassword;
