import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { PortfolioProvider } from "./portfolio";
import { TechnologiesProvider } from "./technologies";

export const AppProvider = ({ children }) => (
  <PortfolioProvider>
    <TechnologiesProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </TechnologiesProvider>
  </PortfolioProvider>
);
