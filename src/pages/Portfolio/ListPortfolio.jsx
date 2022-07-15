import { Box, Flex, HStack, Image, Link, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { PortfolioContext } from "../../context/portfolio";

export const ListPortfolio = () => {
  const { frontEndPortfolio, backEndPortfolio, isFront } =
    useContext(PortfolioContext);
  return (
    <Flex alignItems="center" flexDirection="column" overflowY="auto" w="100%">
      {isFront
        ? frontEndPortfolio.map((item) => (
            <Flex
              marginTop="20px"
              w="80%"
              h="auto"
              bgColor="red.500"
              borderRadius="5px"
            >
              <Image
                display={["none", "none", "block"]}
                src={item.img}
                alt={item.name}
                boxSize="80px"
                w="100px"
                h="auto"
                margin="10px"
              />
              <Flex flexDirection="column" padding="10px">
                <Link
                  href={item.page}
                  isExternal
                  fontWeight="900"
                  color="gray.800"
                >
                  {item.name}
                </Link>
                <Text>{item.description}</Text>
                <HStack color="gray.800">
                  {item.languages.map((l) => (
                    <Box bgColor="white" padding="0px 5px" borderRadius="5px">
                      {l}
                    </Box>
                  ))}
                </HStack>
                <Link href={item.repository} isExternal>
                  Repositório
                </Link>
              </Flex>
            </Flex>
          ))
        : backEndPortfolio.map((item) => (
            <Flex
              marginTop="20px"
              w="80%"
              h="auto"
              bgColor="red.500"
              borderRadius="5px"
            >
              <Image
                display={["none", "none", "block"]}
                src={item.img}
                alt={item.name}
                boxSize="80px"
                w="100px"
                h="auto"
                margin="10px"
              />
              <Flex flexDirection="column" padding="10px">
                <Text fontWeight="900" color="gray.800">
                  {item.name}
                </Text>
                <Text>{item.description}</Text>
                <HStack color="gray.800">
                  {item.languages.map((l) => (
                    <Box bgColor="white" padding="0px 5px" borderRadius="5px">
                      {l}
                    </Box>
                  ))}
                </HStack>
                <Link href={item.repository} isExternal>
                  Repositório
                </Link>
              </Flex>
            </Flex>
          ))}
    </Flex>
  );
};
