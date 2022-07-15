import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Menu } from "../../components/Menu";
import Development from "../../assets/web-development.png";

export const Home = () => {
  return (
    <Flex
      flexDirection="column"
      padding={["20px", "20px", "20px 30px"]}
      h="100vh"
    >
      <Menu />
      <Flex
        h="100%"
        alignItems="center"
        justifyContent="space-around"
        padding={["0px", "0px", "20px"]}
        flexDirection={["column", "column", "row"]}
      >
        <Flex
          flexDirection="column"
          alignItems="center"
          w={["100%", "100%", "50%"]}
          textAlign="center"
        >
          <Heading as="h1" fontSize={["4xl", "4xl", "5xl"]}>
            Lucas Batista Nunes
          </Heading>
          <Box>
            <Text fontSize="3xl">Desenvolvedor Web</Text>
            <Text fontSize="2xl">Front End - Back End - Full Stack</Text>
          </Box>
        </Flex>
        <Image
          src={Development}
          boxSize="400"
          w="30%"
          display={["none", "none", "block"]}
        />
      </Flex>
    </Flex>
  );
};
