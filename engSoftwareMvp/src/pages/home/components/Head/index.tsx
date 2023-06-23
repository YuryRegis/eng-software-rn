import React from "react";
import { VStack, HStack } from "native-base";
import { useNavigation } from "@react-navigation/native";

import { HOME_STRINGS, IHomeStrings } from "../../../../language";
import { Avatar, Button, Typography } from "../../../../components";
import { useLocale } from "../../../../hooks";

function Head() {
  const { locale } = useLocale();
  const { navigate } = useNavigation();
  const [step, setStep] = React.useState("login");
  const strings: IHomeStrings = HOME_STRINGS[locale];

  function handleCreateAccountBtn() {
    navigate("CreateAccount", { callback: () => setStep("edit-profile") });
  }

  function handleEditProfileBtn() {
    navigate("EditProfile", { callback: () => setStep("logged") });
  }

  function handleLoginBtn() {
    navigate("Login", { callback: () => setStep("logged") });
  }

  function handleSteps() {
    switch (step) {
      case "logged":
        return (
          <Typography.OpenSansBold my={4} fontSize="lg">
            Fulano da Silva Sauro
          </Typography.OpenSansBold>
        );
      case "edit-profile":
        return (
          <Button
            my={4}
            upperCase
            onPress={handleEditProfileBtn}
            title={strings.signed.editProfile}
          />
        );
      default:
        return (
          <HStack
            w={"100%"}
            paddingY={8}
            paddingX={8}
            justifyContent={"space-between"}
          >
            <Button
              w={150}
              upperCase
              onPress={handleCreateAccountBtn}
              title={strings.unsigned.createAccount}
            />
            <Button
              w={150}
              outLine
              upperCase
              onPress={handleLoginBtn}
              title={strings.unsigned.login}
            />
          </HStack>
        );
    }
  }

  return (
    <VStack paddingTop={4} w={"100%"} alignItems={"center"}>
      <Avatar />
      {handleSteps()}
    </VStack>
  );
}

export default Head;
