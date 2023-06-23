import { extendTheme } from "native-base";

const THEME = extendTheme({
  colors: {
    primary: {
      700: "#121214",
      500: "#202024",
      300: "#29292E",
      100: "#323238",
    },
    secondary: {
      700: "#643cbb",
      500: "#8a65dc",
    },
    green: {
      700: "#00875F",
      500: "#00B37E",
      300: "#04D361",
    },
    red: {
      700: "#FF004E",
      500: "#DC004E",
    },
    gray: {
      700: "#121214",
      600: "#202024",
      500: "#29292E",
      400: "#323238",
      300: "#7C7C8A",
      200: "#C4C4CC",
      100: "#E1E1E6",
    },
    white: "#FFFFFF",
  },
  fonts: {
    heading: "Roboto_700Bold",
    body: "Roboto_400Regular",
    thin: "Roboto_300Light",
    inputLabel: "OpenSans_700Bold",
    placeholder: "OpenSans_400Regular",
  },
  fontSizes: {
    xs: 8,
    ls: 12,
    sm: 14,
    md: 16,
    lg: 20,
  },
  sizes: {
    14: 56,
  },
});

export default THEME;
