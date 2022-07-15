import { createContext, useState } from "react";

export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const frontEndPortfolio = [
    {
      name: "Lig-4",
      img: "https://www.imagemhost.com.br/images/2022/07/15/lig_4.png",
      page: "https://batistalbn.github.io/lig-4-kenzie/",
      repository: "https://github.com/Batistalbn/lig-4-kenzie",
      languages: ["HTML", "CSS", "JavaScript"],
      description:
        "Jogo Lig-4, desenvoldido em grupo como parte do curso de desenvolvimento FullStack na Kenzie Academy Brasil.",
    },
  ];

  const backEndPortfolio = [
    {
      name: "Cosmopedia",
      img: "https://www.imagemhost.com.br/images/2022/07/15/Captura-de-tela-de-2022-07-14-22-51-00.png",
      repository: "https://github.com/daviraquel/capstone-nodejs",
      languages: ["NodeJs"],
      description:
        "Api desenvolvida em grupo como parte do curso de desenvolvimento FullStack na Kenzie Academy Brasil. A api tem como objetivo auxiliar o estudo de corpos celestes e compartilhar informações com outros usuários.",
    },
    {
      name: "Kenzie Fit",
      img: "https://www.imagemhost.com.br/images/2022/07/15/Captura-de-tela-de-2022-07-15-01-20-43.png",
      repository: "https://github.com/Batistalbn/Academy-API",
      languages: ["Python"],
      description:
        "Api desenvolvida em grupo como parte do curso de desenvolvimento FullStack na Kenzie Academy Brasil. Api voltadada à profissionais da área da Educação Física, onde um personal trainer poderá cadastrar seus alunos e planejar seus treinos semanais.",
    },
  ];

  const [isFront, setIsFront] = useState(false);

  const TypePortfolio = (bool) => {
    setIsFront(bool);
  };

  return (
    <PortfolioContext.Provider
      value={{
        frontEndPortfolio,
        backEndPortfolio,
        isFront,
        setIsFront,
        TypePortfolio,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};
