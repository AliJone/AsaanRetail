import CustomFilledButton from "../buttons/filledButton/index.jsx";
import HeroSectionInput from "../inputs/HeroSectionInputs/index.jsx";
import Image from "next/image";
import InputField from "../inputField/index.jsx";
import ProductPageService from "../../services/ProductPageService.js";
import cn from "classnames";
import landingImage from "./assests/landpagePic.png";
import limit from "../../styles/Limits.module.css";
import style from "./styleSheet.module.sass";
import { useState } from "react";
import { useRouter } from "next/router";

const HeroSectionProduct = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
    console.log(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await ProductPageService.sendProductPageData({ email });
      console.log("Product Page Response:", response);
      // Handle success (e.g., show a success message or redirect)

      router.push("/start-free-trial");
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
            <div className={cn(style.leftPane)}>
              <div className={cn(style.textContainer)}>
                <div className={cn(style.titleContainer)}>
                  <span className={cn(style.titleText)}>
                    Hassle <span className={style.underLine}>free</span>
                    <br /> <span className={style.underLine}>
                      Inventory
                    </span>{" "}
                    Management
                  </span>
                </div>
                <div className={cn(style.subTitleContainer)}>
                  <span className={cn(style.subTitleText)}>
                    Manual inventory hassles driving you up the wall? Our
                    inventory management solution is your ladder to efficient,
                    error-free control.
                  </span>
                </div>
              </div>
              <div className={cn(style.lowerContainer)}>
                {/* <div className={style.FieldClass}>
                  <InputField placeHolder={"Enter Your Work Email"} />
                </div> */}
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
                      Experience 14 Days of Free Trial, <br /> No Credit Card
                      Needed
                    </span>
                  </div>
                </div>
              </div>
            </div>
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
          </div>
        </div>
      </div>
      <div className={cn(style.spacer1)} />
    </>
  );
};

export default HeroSectionProduct;
