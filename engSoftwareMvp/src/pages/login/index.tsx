import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { VStack, Center, useTheme } from "native-base";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { useLocale } from "../../hooks";
import Logo from "../../images/logo.svg";
import { loginForm } from "../../schemas";
import { LOGIN_STRINGS, ILoginStrings } from "../../language";
import {
  Typography,
  FormInput,
  Header,
  Button,
  ScreenWrapper,
} from "../../components";

function Login() {
  const { colors } = useTheme();
  const { locale } = useLocale();
  const { goBack } = useNavigation();
  const { params } = useRoute();
  const strings = LOGIN_STRINGS[locale] as ILoginStrings;
  const { control, handleSubmit, formState } = useForm({
    resolver: yupResolver(loginForm(strings)),
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

export default Login;
