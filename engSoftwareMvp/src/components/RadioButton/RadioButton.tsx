import React from "react";
import { Radio, IRadioProps } from "native-base";

export interface IRadioButtonProps extends IRadioProps {
  title: string | React.ReactNode;
}

function RadioButton({ title, ...rest }: IRadioButtonProps) {
  return (
    <Radio
      m={1}
      colorScheme="red"
      _text={{
        fontSize: "md",
        color: "gray.100",
        fontFamily: "thin",
      }}
      {...rest}
    >
      {title}
    </Radio>
  );
}

export default RadioButton;
