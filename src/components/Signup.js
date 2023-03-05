import React, { useRef } from "react";
import Wrapper from "../assets/wrappers/SignupWrapper";
import { useAppContext } from "../context/appContext";
import languageData from "../assets/data.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const { language } = useAppContext();
  const { header, subheader, input_placeholder, submit } =
    languageData[language].signup;

  const notify = () =>
    toast.info(
      <div>
        Dette er desværre kun en demo. <br />
        Kontakt på <a href="mailto:emil@sejrskild.com">emil@sejrskild.com</a>
      </div>,
      {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      }
    );

  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    notify();
  };

  return (
    <Wrapper>
      <div className="container">
        <div className="left-col">
          <p>
            {language === "en" ? (
              <>
                Please be advised that <span>VEJN</span> is a fictional roadside
                assistance service created for illustrative purposes only. While
                the service and its features were designed to demonstrate the
                potential benefits of a pay-per-use model for roadside
                assistance, <span>VEJN</span> is not a real company or service.
              </>
            ) : (
              <>
                Bemærk venligst, at <span>VEJN</span> er en fiktiv
                vejhjælpstjeneste, der er oprettet udelukkende til illustrative
                formål. Mens tjenesten og dens funktioner er designet til at
                demonstrere de potentielle fordele ved en betalingsmodel baseret
                på brug for vejhjælp, er
                <span>VEJN</span> ikke en reel virksomhed eller tjeneste.
              </>
            )}
          </p>
          <p className="created">
            {language === "en" ? "Concept by" : "Koncept af"}{" "}
            <a href="https://sejrskild.com">Emil Sejrskild</a>
          </p>
        </div>
        <div className="right-col">
          <h3>
            {header} <span>VEJN</span>?<p>{subheader}</p>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input type="text" placeholder={input_placeholder} />
              <button type="submit">{submit}</button>
            </form>
          </h3>
        </div>
      </div>
      <ToastContainer />
    </Wrapper>
  );
};

export default Signup;
