import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { MenuMobile } from "./MenuMobile";

export const Menu = () => {
  return (
    <>
      <Flex
        justifyContent="flex-end"
        fontSize="2xl"
        display={["none", "none", "flex"]}
      >
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/">
              Inicio
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/about">
              Sobre
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/technologies">
              Tecnologias
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/portfolio">
              Portfólio
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>

      <MenuMobile />
    </>
  );
};
