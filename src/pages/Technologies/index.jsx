import { Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Menu } from "../../components/Menu";
import { TechnologiesContext } from "../../context/technologies";
import FrontEnd from "../../assets/front-end.png";
import BackEnd from "../../assets/back-end.png";
import { useContext } from "react";

export const Technologies = () => {
  const { backEndList, frontEndList } = useContext(TechnologiesContext);

  return (
    <Flex
      flexDirection="column"
      padding={["20px", "20px", "20px 30px"]}
      h="100vh"
    >
      <Menu />
      <Flex
        flexDirection="column"
        alignItems="center"
        h="auto"
        padding={["0px", "0px", "20px"]}
        marginBottom="30px"
      >
        <Heading margin={["10px", "10px", "30px 0px"]} textAlign="center">
          Tecnologias
        </Heading>
        <Flex
          justifyContent={["flex-start", "center"]}
          flexDirection={["column", "column", "row"]}
          w="100%"
          h="auto"
        >
          <Flex
            flexDirection="column"
            alignItems="center"
            bg="red.500"
            w={["100%", "100%", "30%"]}
            h="100%"
            borderRadius="25px"
            padding="10px"
            marginRight={["0px", "0px", "15px"]}
            marginBottom={["30px", "30px", "0px"]}
          >
            <Heading>Front-End</Heading>
            <Image
              src={FrontEnd}
              alt="Front-End"
              boxSize="200"
              marginBottom="10px"
            />
            {frontEndList.map((item) => (
              <VStack spacing="2" fontSize="xl">
                <Text>{item}</Text>
              </VStack>
            ))}
          </Flex>
          <Flex
            flexDirection="column"
            alignItems="center"
            bg="red.500"
            w={["100%", "100%", "30%"]}
            borderRadius="25px"
            padding="10px"
            h="100%"
            marginLeft={["0px", "0px", "15px"]}
          >
            <Heading>Back-End</Heading>
            <Image src={BackEnd} alt="Back-End" boxSize="200" />
            {backEndList.map((item) => (
              <VStack spacing="2" fontSize="xl">
                <Text>{item}</Text>
              </VStack>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
