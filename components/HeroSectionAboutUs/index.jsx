import Asset1 from "./assets/Asset.png";
import Asset2 from "./assets/Asset_1.png";
import CustomFilledButton from "../buttons/filledButton/index.jsx";
import Image from "next/image";
import InputField from "../inputField/index.jsx";
import ScrollAnimation from "react-animate-on-scroll";
import cn from "classnames";
import limit from "../../styles/Limits.module.css";
import style from "./styleSheet.module.sass";

// import landingImage from './assests/landpagePic.png'

const HeroSectionAboutUs = () => {
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
                    Discover{' '}
                    <p className={cn(style.titleText , style.underLine)}> Asaan Retail</p>
                  </h1>
                </div>
                <div className={cn(style.subTitleContainer)}>
                  <span className={cn(style.subTitleText)}>
                    At Asaan Retail, we’re the architects of streamlined
                    commerce. Our journey is one of dedication to empowering
                    businesses of all sizes.
                  </span>
                </div>
              </div>
              <div className={cn(style.lowerContainer)}>
                <div className={style.FieldClass}>
                  <InputField placeHolder={"Enter Your Work Email"} />
                </div>
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
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__fadeInRight"> 
            <div className={cn(style.rightPane)}>
              <div className={cn(style.ImageContainer)}>
                <Image
                  className={cn(style.ImageDiv, style.ImageDivPosition)}
                  src={Asset1}
                  alt="1"
                ></Image>
                <Image
                  className={cn(style.ImageDiv, style.ImageDivPosition2)}
                  src={Asset2}
                  alt="2"
                ></Image>
                <Image
                  className={cn(style.ImageDiv2)}
                  src={Asset1}
                  alt="1"
                ></Image>
              </div>
            </div>
          </ScrollAnimation>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSectionAboutUs;
