import React from "react";
import { Box } from "native-base";

function CardWrapper({ children, ...rest }) {
  return (
    <Box bg="primary.300" shadow={4} rounded={8} p={4} {...rest}>
      {children}
    </Box>
  );
}

export default CardWrapper;
