import React from "react";
import { useForm } from "react-hook-form";
import { VStack, Center } from "native-base";
import { yupResolver } from "@hookform/resolvers/yup";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { useLocale } from "../../hooks";
import Logo from "../../images/logo.svg";
import { createAccountForm } from "../../schemas";
import { CREATE_ACCOUNT_STRINGS, ICreateAccountStrings } from "../../language";
import {
  Header,
  Button,
  FormInput,
  Typography,
  ScreenWrapper,
} from "../../components";

function CreateAccount() {
  const { locale } = useLocale();
  const { goBack } = useNavigation();
  const { params } = useRoute();
  const strings = CREATE_ACCOUNT_STRINGS[locale] as ICreateAccountStrings;
  const { control, handleSubmit, formState } = useForm({
    resolver: yupResolver(createAccountForm(strings)),
  });

  function handleLoginBtn(data) {
    console.log(data);
    params?.callback();
    goBack();
  }

  return (
    <ScreenWrapper>
      <Header goBackBtn />

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <VStack justifyContent={"center"} p={4}>
          <Center>
            <Logo width={100} height={100} />

            <Typography.RobotoBold fontSize={24} mt={4}>
              {strings.title}
            </Typography.RobotoBold>
          </Center>

          <Center m={4} mb={2}>
            <FormInput
              name="email"
              control={control}
              title={strings.form.email.title}
              placeholder={strings.form.email.placeHolder}
              errorMessage={formState.errors.email?.message as string}
            />
          </Center>

          <Center m={4} mt={2}>
            <FormInput
              name="password"
              type="password"
              control={control}
              title={strings.form.password.title}
              errorMessage={formState.errors.password?.message as string}
            />
          </Center>

          <Center m={4} mt={2}>
            <FormInput
              name="passwordConfirm"
              type="password"
              control={control}
              title={strings.form.passwordConfirm.title}
              errorMessage={formState.errors.passwordConfirm?.message as string}
            />
          </Center>

          <Center m={4}>
            <Button
              upperCase
              minW={150}
              title={strings.confirmBtn}
              onPress={handleSubmit(handleLoginBtn)}
            />
          </Center>
        </VStack>
      </TouchableWithoutFeedback>
    </ScreenWrapper>
  );
}

export default CreateAccount;
