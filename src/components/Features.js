import React from "react";
import Wrapper from "../assets/wrappers/FeaturesWrapper";
import { MdPayment } from "react-icons/md";
import { AiOutlineFieldTime } from "react-icons/ai";
import { IoIosOptions, IoMdGlobe } from "react-icons/io";
import FadeInOnVisible from "../utilities/FadeInAnimation";
import { useAppContext } from "../context/appContext";
import languageData from "../assets/data.json";

const Features = () => {
  const { language } = useAppContext();
  const { feature1, feature2, feature3, feature4 } =
    languageData[language].features;

  return (
    <>
      <Wrapper>
        <div class="custom-shape-divider-top-1677856791">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="features">
          <FadeInOnVisible>
            <div className="feature">
              <div className="feature-icon">
                <IoIosOptions />
              </div>
              <p>
                <span>VEJN</span> {feature1}
              </p>
            </div>
          </FadeInOnVisible>
          <FadeInOnVisible>
            <div className="feature">
              <div className="feature-icon">
                <MdPayment />
              </div>
              <p>
                <span>VEJN</span>'s {feature2}
              </p>
            </div>
          </FadeInOnVisible>
          <FadeInOnVisible>
            <div className="feature">
              <div className="feature-icon">
                <AiOutlineFieldTime />
              </div>
              <p>
                  <span>VEJN</span> {feature3}
              </p>
            </div>
          </FadeInOnVisible>
          <FadeInOnVisible>
            <div className="feature">
              <div className="feature-icon">
                <IoMdGlobe />
              </div>
              <p>
                <span>VEJN</span> {feature4}
              </p>
            </div>
          </FadeInOnVisible>
        </div>
      </Wrapper>
    </>
  );
};

export default Features;
