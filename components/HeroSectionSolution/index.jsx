import CustomFilledButton from "../buttons/filledButton/index.jsx";
import Image from "next/image";
import InputField from "../inputField/index.jsx";
import cn from "classnames";
import landingImage from "./assests/landpagePic.png";
import limit from "../../styles/Limits.module.css";
import style from "./styleSheet.module.sass";
import HeroSectionInput from "../inputs/HeroSectionInputs/index.jsx";

const HeroSectionProduct = () => {
  return (
    <>
      <div className={cn(style.heroSection)}>
        <div className={cn(limit.Limit)}>
          <div className={cn(style.container)}>
            <div className={cn(style.leftPane)}>
              <div className={cn(style.textContainer)}>
                <div className={cn(style.titleContainer)}>
                <span className={cn(style.titleText)}>
                    Your complete
                    <br /> <span className={style.underLine}>
                      Ecommerce
                    </span>{" "}
                    <br />
                    Management <span className={style.underLine}> suite</span>
                  </span>
                </div>
                <div className={cn(style.subTitleContainer)}>
                  <span className={cn(style.subTitleText)}>
                  Asaan Retail's tailored solutions redefine how you manage inventory, fulfill orders, and harness analytics. 
Experience a surge in productivity and profitability.
                  </span>
                </div>
              </div>
              <div className={cn(style.lowerContainer)}>
                {/* <div className={style.FieldClass}>
                  <InputField placeHolder={"Enter Your Work Email"} />
                </div> */}
                <HeroSectionInput placeHolder={"Enter Your Work Email"} />

                <div className={cn(style.buttonTextContainer)}>
                  <div className={cn(style.buttonContainer)}>
                    <CustomFilledButton
                      children={
                        <span className={cn(style.FilledButtonText)}>
                          Start Free Trial
                        </span>
                      }
                      width={"100%"}
                      handleClick={() => {}}
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
