import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    red: {
      200: "#feb2b2",
      500: "#e53e3e",
      700: "#9b2c2c",
    },
    gray: {
      400: "#a0aec0",
      800: "#1a202c",
    },
  },
  fonts: {
    heading: "Inter",
    body: "Inter",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  styles: {
    global: {
      body: {
        bg: "gray.800",
        color: "white",
      },
    },
  },
});
