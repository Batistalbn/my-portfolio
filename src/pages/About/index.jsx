import {
  Avatar,
  Flex,
  Heading,
  HStack,
  Link,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { Menu } from "../../components/Menu";
import Eu from "../../assets/lucas.jpeg";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const About = () => {
  return (
    <Flex
      flexDirection="column"
      padding={["20px", "20px", "20px 30px"]}
      h="100vh"
    >
      <Menu />

      <Flex flexDirection="column" h="100%" padding={["0px", "0px", "20px"]}>
        <Heading margin={["10px", "10px", "30px 0px"]} textAlign="center">
          Sobre mim
        </Heading>

        <Flex
          flexDirection={["column", "column", "column", "row"]}
          w="100%"
          padding={["0px", "0px", "20px"]}
          justifyContent="space-evenly"
          alignItems="center"
          fontSize="md"
        >
          <VStack spacing="5" flexDirection="column">
            <Wrap>
              <WrapItem>
                <Avatar
                  src={Eu}
                  name="Lucas Batista Nunes"
                  boxSize={["150", "150", "200"]}
                />
              </WrapItem>
            </Wrap>

            <VStack alignItems="flex-start" fontSize={["md", "md", "xl"]}>
              <HStack spacing="2">
                <PhoneIcon />
                <Text>Telefone: (43) 98832-7515</Text>
              </HStack>
              <HStack spacing="2">
                <EmailIcon />
                <Text>Email: batista.lucas3098@gmail.com</Text>
              </HStack>
              <HStack spacing="2">
                <FaLinkedin />
                <Link
                  href="https://www.linkedin.com/in/lucas-batista-006877231/"
                  isExternal
                >
                  Linkedin
                </Link>
              </HStack>
              <HStack spacing="2">
                <FaGithub />
                <Link href=" https://github.com/Batistalbn" isExternal>
                  GitHub
                </Link>
              </HStack>
            </VStack>
          </VStack>

          <Text
            w={["100%", "100%", "80%", "60%"]}
            fontSize={["md", "md", "xl"]}
            textAlign="justify"
            margin={["20px 0px", "20px 0px", "20px 0px", "0px"]}
          >
            Apaixonado pela tecnologia e pela história. A busca pelo
            conhecimento é o que me move. Minha relação com a tecnologia começou
            aos 12 anos, quando ganhei meu primeiro computador para trabalhos
            escolares. A busca por tentar entender como aquela "máquina",
            aplicativos e sites funcionavam me levou a estudar programação.
            Atualmente, estou ingressando na área da tecnologia como
            Desenvolvedor Web afim de aprimorar minhas habilidades e adquirir
            novos conhecimentos e experiências.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
