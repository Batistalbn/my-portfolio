import { createContext } from "react";

export const TechnologiesContext = createContext();

export const TechnologiesProvider = ({ children }) => {
  const frontEndList = ["HTML5", "CSS3", "JavaScript", "React", "Typescript"];
  const backEndList = [
    "Python",
    "NodeJs",
    "Django",
    "ExpressJs",
    "Flask",
    "PostgreSQL",
  ];

  return (
    <TechnologiesContext.Provider value={{ frontEndList, backEndList }}>
      {children}
    </TechnologiesContext.Provider>
  );
};
