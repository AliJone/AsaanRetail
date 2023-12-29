import CarouselIntegration from "./carousel";
import CustomFilledButton from "../buttons/filledButton";
import HeroSectionInput from "../inputs/HeroSectionInputs";
import InputField from "../inputField";
import IntegrationPageService from "../../services/IntegrationPageService";
import c1 from "./assests/c1.svg";
import c2 from "./assests/c2.svg";
import c3 from "./assests/c3.svg";
import c4 from "./assests/c4.svg";
import c5 from "./assests/c5.svg";
import c6 from "./assests/c6.svg";
import c7 from "./assests/c7.svg";
import cn from "classnames";
import limit from "../../styles/Limits.module.css";
import style from "./styleSheet.module.sass";
import { useState } from "react";

const imagesarray = [c1, c2, c3, c4, c5, c6, c7];
const HeroSectionIntegration = () => {
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
    console.log(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await IntegrationPageService.sendIntegrationPageData({
        email,
      });
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
        <div className={cn(style.heroSectionBG)}>
          <div className={cn(limit.Limit)}>
            <div className={cn(style.textContainer)}>
              <div className={cn(style.titleContainer)}>
                <span className={cn(style.titleText)}>
                  Every <span className={cn(style.underLine)}>integration</span>{" "}
                  <br /> you need is here
                </span>
              </div>
              <div className={cn(style.subTitleContainer)}>
                <span className={cn(style.subTitleText)}>
                  At Asaan Retail, we're your gateway to seamless connections
                  and unmatched performance.
                </span>
              </div>

              <div className={cn(style.textFieldContainer)}>
                {/* <div className={cn(style.textFieldCard)}> */}
                <HeroSectionInput
                  placeHolder={"Enter Your Work Email"}
                  onChange={handleChange}
                  value={email}
                />
                {/* </div> */}
                <span className={cn(style.greyText)}>
                  Experience 14 Days of Free Trial, <br /> No Credit Card Needed
                </span>
                <div className={cn(style.buttonContainer)}>
                  <CustomFilledButton
                    width={"inherit"}
                    children={
                      <span className={cn(style.buttonText)}>
                        Start Free Trial
                      </span>
                    }
                    handleClick={handleSubmit}
                  />
                </div>
              </div>
            </div>

            <div className={cn(style.carouselContainer)}>
              <CarouselIntegration imagesarray={imagesarray} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSectionIntegration;
