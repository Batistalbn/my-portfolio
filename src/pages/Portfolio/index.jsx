import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Menu } from "../../components/Menu";
import { PortfolioContext } from "../../context/portfolio";
import { ButtonPortfolio } from "./ButtonPortfolio";
import { ListPortfolio } from "./ListPortfolio";

export const Portfolio = () => {
  return (
    <Flex
      flexDirection="column"
      padding={["20px", "20px", "20px 30px"]}
      h="100vh"
    >
      <Menu />
      <Flex h="100%" flexDirection="column" marginTop="10px">
        <Heading textAlign="center" marginBottom="20px">
          Portfólio
        </Heading>
        <Flex h="100%" alignItems="center" flexDirection="column">
          <Flex marginBottom="20px">
            <ButtonPortfolio />
          </Flex>

          <ListPortfolio />
        </Flex>
      </Flex>
    </Flex>
  );
};
