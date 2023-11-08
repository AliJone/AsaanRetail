import { Button } from "antd";
import CustomFilledButton from "../buttons/filledButton";
import Growth from "./assests/careerGrowth.svg";
import Image from "next/image";
import cn from "classnames";
import p1 from "./assests/person1.svg";
import p2 from "./assests/person2.svg";
import p3 from "./assests/person3.svg";
import p4 from "./assests/person4.svg";
import p5 from "./assests/person5.svg";
import p6 from "./assests/person6.svg";
import p7 from "./assests/person7.svg";
import p8 from "./assests/person8.svg";
import style from "./styleSheet.module.sass";

const HeroSectionCareer = () => {
  return (
    <>
      <div className={cn(style.heroSection)}>
        <div className={cn(style.careerGrowthContainer)}>
          <Button className={cn(style.buttonClass)}>
            <div className={cn(style.Gap)}>
              <span className={cn(style.fontButtonCareer)}>Career Growth</span>
              <Image src={Growth} alt="logo" />
            </div>
          </Button>
        </div>

        <div className={cn(style.textContainer)}>
          <div className={cn(style.titleContainer)}>
            <span className={cn(style.titleText)}>
              Discover your{" "}
              <span className={cn(style.underLine)}>
                <span />
                future
              </span>{" "}
              with Asaan Retail
            </span>
          </div>
          <div className={cn(style.subTitleContainer)}>
            <span className={cn(style.subTitleText)}>
              We offer a collaborative work environment, opportunities for
              advancement.
            </span>
          </div>
        </div>
        <div className={cn(style.spacer1)} />
        <div className={cn(style.imageContainer)}>
          {[p1, p2, p3, p4, p5, p6, p7, p8].map((item, index) => {
            return (
              <>
                {index === 0 ? (
                  <Image src={item} alt="logo" />
                ) : (
                  <Image
                    src={item}
                    className={cn(style.imageIntance)}
                    alt="logo"
                  />
                )}
              </>
            );
          })}
        </div>
        <div>
          <div className={cn(style.spacer2)} />

          <div className={cn(style.buttonContainer)}>
            <CustomFilledButton
              children={
                <span className={cn(style.buttonText)}>Explore open roles</span>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSectionCareer;
