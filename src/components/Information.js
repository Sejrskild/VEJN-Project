import Wrapper from "../assets/wrappers/InformationWrapper";
import iphone from "../assets/images/iphone-mockup.png";
import { BsQuestionCircle } from "react-icons/bs";
import { useSpring, animated } from "@react-spring/web";

import { useAppContext } from "../context/appContext";
import languageData from "../assets/data.json";

const Information = () => {
  const { language } = useAppContext();
  const { header } = languageData[language].information;

  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <Wrapper>
      <animated.div style={props}>
        <div className="container">
          <div className="left-col">
            <div className="left-col-header">
              <BsQuestionCircle />
              <h1>
                {header} <span>VEJN</span>
              </h1>
            </div>
            <p>
              {language === "en" ? (
                <>
                  <span>VEJN</span> is a{" "}
                  <span className="blue">roadside assistance service</span> that
                  operates like Uber, with a{" "}
                  <span className="blue">pay-per-use payment model</span>.
                  Drivers can request assistance through the <span>VEJN</span>{" "}
                  app, which uses GPS to connect them with the nearest available
                  service provider.
                </>
              ) : (
                <>
                  <span>VEJN</span> er en{" "}
                  <span className="blue">vejhjælpstjeneste</span>, der fungerer
                  som Uber, med en betalingsmodel{" "}
                  <span className="blue">baseret på brug</span>. Bilister kan
                  anmode om hjælp gennem <span>VEJN</span> appen, som bruger GPS
                  til at forbinde dem med den nærmeste tilgængelige
                  serviceudbyder.
                </>
              )}
            </p>
            <p>
              {language === "en" ? (
                <>
                  Service providers on the <span>VEJN</span> platform are{" "}
                  <span className="blue">independent contractors</span> who have
                  been vetted and approved by the company. They are equipped to
                  handle a variety of roadside issues and will provide an
                  estimate for the cost of the service before any work is done.
                  If the driver accepts the estimate, they will be charged
                  through the <span>VEJN</span> app.
                </>
              ) : (
                <>
                  Serviceudbydere på <span>VEJN</span> platformen er{" "}
                  <span className="blue">uafhængige entreprenører</span>, der er
                  blevet gennemgået og godkendt af virksomheden. De er udstyret
                  til at håndtere en række vejhjælpsproblemer og vil give et
                  overslag over omkostningerne for tjenesten, før der udføres
                  noget arbejde. Hvis føreren accepterer overslaget, vil de
                  blive opkrævet gennem <span>VEJN</span>.
                </>
              )}
            </p>
          </div>
          <div className="right-col">
            <img src={iphone} alt="iphone" />
          </div>
        </div>
      </animated.div>
    </Wrapper>
  );
};

export default Information;
