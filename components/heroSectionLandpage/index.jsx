import { useEffect, useState } from "react";

import CustomFilledButton from "../buttons/filledButton/index.jsx";
import Flags from "./flags.jsx";
import HeroSectionInput from "../inputs/HeroSectionInputs/index.jsx";
import Image from "next/image";
import InputField from "../inputField/index.jsx";
import LandingPageService from "../../services/LandingPageService.js";
import ScrollAnimation from "react-animate-on-scroll";
import cn from "classnames";
import landingImage from "./assests/landpagePic.png";
import limit from "../../styles/Limits.module.css";
import style from "./styleSheet.module.sass";

const HeroSectionLanding = () => {
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
    console.log(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await LandingPageService.setLandingPageData({ email });
      console.log("landingPage Response:", response);
      // Handle success (e.g., show a success message or redirect)
    } catch (error) {
      console.error("Error:", error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <>
      <div className={cn(style.heroSection)}>
        <div className={cn(limit.Limit)}>
          <div className={cn(style.container)}>
            <ScrollAnimation animateIn="animate__fadeInLeft">
              <div className={cn(style.leftPane)}>
                <div className={cn(style.textContainer)}>
                  <div className={cn(style.titleContainer)}>
                    <h1 className={cn(style.titleText)}>
                      Centralized{" "}
                      <span className={style.underLine}>Retail</span> &{" "}
                      <span className={style.underLine}>Ecommerce</span>{" "}
                      Management
                    </h1>
                  </div>
                  <div>
                    <Flags />
                  </div>
                  <div className={cn(style.subTitleContainer)}>
                    <h4 className={cn(style.subTitleText)}>
                      One window{" "}
                      <span className={cn(style.changeColorSubTitle)}>
                        <b>Inventory</b>
                      </span>
                      ,{" "}
                      <span className={cn(style.changeColorSubTitle)}>
                        <b>Orders</b>
                      </span>
                      ,{" "}
                      <span className={cn(style.changeColorSubTitle)}>
                        <b>Shipments</b>
                      </span>
                      , and{" "}
                      <span className={cn(style.changeColorSubTitle)}>
                        <b>Accounting</b>
                      </span>{" "}
                      software for Multi-Channel Commerce.
                    </h4>
                  </div>
                </div>
                <div className={cn(style.lowerContainer)}>
                  <HeroSectionInput
                    placeHolder={"Enter Your Work Email"}
                    onChange={handleChange}
                    value={email}
                  />

                  <div className={cn(style.buttonTextContainer)}>
                    <div className={cn(style.buttonContainer)}>
                      <CustomFilledButton
                        children={
                          <span className={cn(style.FilledButtonText)}>
                            Start Free Trial
                          </span>
                        }
                        width={"100%"}
                        handleClick={handleSubmit}
                      />
                    </div>
                    <div className={cn(style.greyTextContainer)}>
                      <span className={cn(style.greyText)}>
                        Experience 14 Days of Free Trial, No Credit Card Needed
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn="animate__fadeInRight">
              <div className={cn(style.rightPane)}>
                <div className={cn(style.ImageContainer)}>
                  <span />
                  <Image
                    className={cn(style.ImageDiv)}
                    src={landingImage}
                    alt="image"
                  />
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className={cn(style.spacer1)} />
    </>
  );
};

export default HeroSectionLanding;
