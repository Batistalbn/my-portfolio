import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { PortfolioContext } from "../../context/portfolio";

export const ButtonPortfolio = () => {
  const { TypePortfolio, isFront } = useContext(PortfolioContext);

  return (
    <>
      <Button
        onClick={() => TypePortfolio(true)}
        w={["141px", "141px", "384px"]}
        h={["35px", "35px", "55px"]}
        borderRadius="16px 0px 0px 16px"
        bgColor={isFront ? "red.500" : "red.300"}
        fontSize={["md", "md", "xl"]}
      >
        Front-End
      </Button>
      <Button
        onClick={() => TypePortfolio(false)}
        w={["141px", "141px", "384px"]}
        h={["35px", "35px", "55px"]}
        borderRadius="0px 16px 16px 0px"
        bgColor={isFront ? "red.300" : "red.500"}
        fontSize={["md", "md", "xl"]}
      >
        Back-End
      </Button>
    </>
  );
};
