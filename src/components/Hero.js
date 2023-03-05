import React from "react";
import Wrapper from "../assets/wrappers/HeroWrapper.js";
import logo from "../assets/images/vejn-svg.svg";
import { useAppContext } from "../context/appContext";
import languageData from "../assets/data.json";

const Hero = () => {
  const { language } = useAppContext();
  const { header, subheader } = languageData[language].hero;

  return (
    <Wrapper>
      <img src={logo} alt="Vejn logo" />
      <p>{subheader}</p>
      <h1>
        <span className="vejn-text">VEJN</span> {header}{" "}
        <span>{language === "en" ? "digitalisation" : "digitalisering"}</span>.
      </h1>
    </Wrapper>
  );
};

export default Hero;
