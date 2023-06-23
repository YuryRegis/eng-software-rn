import React from "react";
import { Switch, ISwitchProps } from "native-base";
import { LogBox } from "react-native";

function ToggleButton({ ...rest }: ISwitchProps) {
  React.useEffect(() => {
    LogBox.ignoreLogs(["We can not support a function callback."]);
  }, []);
  return (
    <Switch
      size="md"
      onTrackColor="gray.100"
      offTrackColor="gray.300"
      offThumbColor="gray.100"
      onThumbColor="secondary.700"
      {...rest}
    />
  );
}

export default ToggleButton;
