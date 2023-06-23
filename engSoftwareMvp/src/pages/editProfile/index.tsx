import { Platform } from "react-native";
import React from "react";
import { useForm } from "react-hook-form";
import { Ionicons } from "@expo/vector-icons";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRoute, useNavigation } from "@react-navigation/native";

import {
  Box,
  Icon,
  Center,
  ScrollView,
  IRadioValue,
  VStack,
} from "native-base";

import {
  Avatar,
  Header,
  Button,
  FormInput,
  RadioGroup,
  Typography,
  RadioButton,
  SelectInput,
  ScreenWrapper,
  AthenaDatePicker,
  AvoidKeyboardWrapper,
} from "../../components";
import { editProfileForm } from "../../schemas";
import { EDIT_PROFILE_STRINGS, IEditProfileStrings } from "../../language";
import { useLocale } from "../../hooks";

function EditProfile() {
  const [show, setShow] = React.useState(false);

  const { locale } = useLocale();
  const { params } = useRoute();
  const { goBack } = useNavigation();
  const isAndroid = Platform.OS === "android";
  const strings: IEditProfileStrings = EDIT_PROFILE_STRINGS[locale];
  const { control, handleSubmit, formState } = useForm({
    resolver: yupResolver(editProfileForm(strings)),
  });

  function handleSubmitBtn(data) {
    console.log(data);
    params?.callback();
    goBack();
  }

  return (
    <ScreenWrapper>
      <Header goBackBtn title={strings.title} />

      <AvoidKeyboardWrapper _container={{ px: "4", pb: "8", pt: "4" }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Center>
            <Avatar
              user={params?.user}
              onPress={() => {}}
              button={
                <Icon
                  as={<Ionicons name="camera" />}
                  color="secondary.500"
                  size="sm"
                  mt="0.5"
                />
              }
            />
          </Center>

          <VStack space={4} mt="2">
            <Box>
              <FormInput
                title={strings.form.userName.title}
                name={strings.form.userName.name}
                control={control}
                errorMessage={
                  formState.errors[strings.form.userName.name]
                    ?.message as string
                }
              />
            </Box>

            <Box>
              <FormInput
                title={strings.form.lastName.title}
                name={strings.form.lastName.name}
                control={control}
                errorMessage={
                  formState.errors[strings.form.lastName.name]
                    ?.message as string
                }
              />
            </Box>

            <VStack space={2}>
              {!isAndroid && (
                <Typography.OpenSansBold fontSize="md">
                  {strings.form.birthday.title}

                  {formState.touchedFields[strings.form.birthday.name]}
                </Typography.OpenSansBold>
              )}

              {!isAndroid ? (
                <AthenaDatePicker
                  show={show}
                  control={control}
                  cancelBtnText="Cancel"
                  confirmBtnText="Confirm"
                  name={strings.form.birthday.name}
                  cb={() => setShow((oldState) => !oldState)}
                  errorMessage={
                    formState.errors[strings.form.birthday.name]
                      ?.message as string
                  }
                />
              ) : (
                //   <Button
                //     title={strings.form.birthday.title}
                //     onPress={() => setShow(true)}
                //   />
                // )}
                <FormInput
                  placeholder={strings.form.birthday.placeHolder}
                  title={strings.form.birthday.title}
                  name={strings.form.birthday.name}
                  keyboardType="phone-pad"
                  control={control}
                  errorMessage={
                    formState.errors[strings.form.birthday.name]
                      ?.message as string
                  }
                />
              )}
            </VStack>

            <Box pt="8">
              <RadioGroup
                name={strings.form.profileType.name}
                control={control}
                errorMessage={
                  formState.errors[strings.form.profileType.name]
                    ?.message as string
                }
                value={control._fields?.value as unknown as IRadioValue}
              >
                {strings.form.profileType.options?.map((option, _) => (
                  <RadioButton
                    key={option.title}
                    title={option.title}
                    value={option.value}
                  />
                ))}
              </RadioGroup>
            </Box>
          </VStack>
        </ScrollView>
        <Center mt="8">
          <Button
            upperCase
            minW="150"
            title={strings.form.sendBtn}
            onPress={handleSubmit(handleSubmitBtn)}
          />
        </Center>
      </AvoidKeyboardWrapper>
    </ScreenWrapper>
  );
}

export default EditProfile;
