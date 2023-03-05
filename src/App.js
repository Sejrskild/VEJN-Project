import React from "react";
import { Hero, Signup, Information, Features } from "./components";
import { useAppContext } from "./context/appContext";
import Denmark from "../src/assets/images/denmark.svg";
import English from "../src/assets/images/english.svg";

const App = () => {
  const { language, setLanguage } = useAppContext();

  return (
    <>
      {language === "en" ? (
        <img className="language" alt="language control" src={Denmark} onClick={() => setLanguage('dk')} />
      ) : (
        <img className="language" alt="language control" src={English} onClick={() => setLanguage('en')} />
      )}
      <Hero />
      <Information />
      <Features />
      <Signup />
    </>
  );
};

export default App;
