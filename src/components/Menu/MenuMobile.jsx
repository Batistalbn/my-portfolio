import { HamburgerIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const MenuMobile = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        rightIcon={<HamburgerIcon />}
        display={["block", "block", "none", "none"]}
        color="white"
        bgColor="gray.800"
        fontSize="28px"
        boxSize="30"
        _hover={{ bg: "#1a202c", color: "#fff" }}
        _focus={{ bg: "#1a202c", color: "#fff" }}
        _expanded={{ bg: "#1a202c", color: "#fff" }}
      />
      <MenuList color="gray.800">
        <MenuItem as={Link} to="/">
          Inicio
        </MenuItem>
        <MenuItem as={Link} to="/about">
          Sobre
        </MenuItem>
        <MenuItem as={Link} to="/technologies">
          Tecnologia
        </MenuItem>
        <MenuItem as={Link} to="/portfolio">
          Portfólio
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
