import PricingCard from "./pricingCard";
import Tabs from "./tabs";
import cn from "classnames";
import limit from "../../styles/Limits.module.css";
import style from "./styleSheet.module.sass";
import { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";

const HeroSectionPricing = ({ tabNumber, setTabNumber,featureProps, titleProps, priceProps, unitProps, subtitleProps }) => {
  // const [tabNumber, setTabNumber] = useState(1);
  const [feature, setFeatures] = useState(featureProps);
  const [Title, setTitles] = useState(titleProps);
  const [Price, setPrices] = useState(priceProps); // Prices should be stored as numbers
  const [unit, setUnits] = useState(unitProps);
  const [Subtitle, setSubtitles] = useState(subtitleProps);


  const handleClick = (number) => {
    setTabNumber(number);
  };

  // const feature = [
  //   "50 sales orders/month incl.",
  //   "1 team member.",
  //   "No Setup Assistance.",
  //   "Inventory sync after 2 hours.",
  // ];

  // const Title = ["Standard", "Premium", "Pro"];

  // const Price1 = ["$40", "$60", "$50"];

  // const Price2 = ["$40", "$60", "$50"];

  // const Price3 = ["$40", "$60", "$50"];

  // const unit = ["/mo", "/qtr", "/yr"];

  // const Subtitle = [
  //   "Perfect plan for Starters",
  //   "Perfect plan for mid level businesses",
  //   "Perfect plan for Starters",
  // ];

  return (
    <>
      <div className={cn(style.heroSection)}>
        <div className={cn(limit.Limit)}>
          <div className={cn(style.spacer1)} />

          <ScrollAnimation animateOnce={true} animateIn={"animate__fadeInUp"}>
            <h1 className={cn(style.divTitleContainer)}>
              <span className={cn(style.titleText)}>
                Pricing for{" "}
                <span className={cn(style.titleDiv, style.underLine)}>
                  <span />
                  SMBs
                </span>{" "}
                to enterprises
              </span>
            </h1>
          </ScrollAnimation>

          <div className={cn(style.spacer2)} />

          <ScrollAnimation animateOnce={true} animateIn={"animate__fadeInUp"}>
            <h4 className={cn(style.subTitleContainer)}>
              <span className={cn(style.subTitleText)}>
                Flexible plans to elevate your business
              </span>
            </h4>
          </ScrollAnimation>

          <div className={cn(style.spacer3)} />

          <ScrollAnimation animateOnce={true} animateIn={"animate__fadeInUp"}>
            <div className={cn(style.tabsOnSectionDiv)}>
              <Tabs tabNumber={tabNumber} handleClick={handleClick} />
            </div>
          </ScrollAnimation>

          <div className={cn(style.spacer4)} />

          <div className={cn(style.test)}>
            <div className={cn(style.forBG)}>
              <span />
            </div>
          </div>

          <div className={cn(style.cardsOnSectionDiv)}>
            <div className={cn(style.mobileView, style.forCard)}>
              <PricingCard
                features={feature}
                price={
                  tabNumber === 1
                    ? Price[0][1]
                    : tabNumber == 2
                    ? Price[1][1]
                    : Price[2][1]
                }
                unit={
                  tabNumber === 1 ? unit[0] : tabNumber == 2 ? unit[1] : unit[2]
                }
                subtitle={Subtitle[1]}
                title={Title[1]}
                type={1}
              />
            </div>

            <PricingCard
              features={feature}
              price={
                tabNumber === 1
                  ? Price[0][0]
                  : tabNumber == 2
                  ? Price[1][0]
                  : Price[2][0]
              }
              unit={
                tabNumber === 1 ? unit[0] : tabNumber == 2 ? unit[1] : unit[2]
              }
              subtitle={Subtitle[0]}
              title={Title[0]}
              type={2}
            />
            <div className={cn(style.desktopView, style.forCard)}>
              <PricingCard
                features={feature}
                price={
                  tabNumber === 1
                    ? Price[0][1]
                    : tabNumber == 2
                    ? Price[1][1]
                    : Price[2][1]
                }
                unit={
                  tabNumber === 1 ? unit[0] : tabNumber == 2 ? unit[1] : unit[2]
                }
                subtitle={Subtitle[1]}
                title={Title[1]}
                type={1}
              />
            </div>
            <PricingCard
              features={feature}
              price={
                tabNumber === 1
                  ? Price[0][2]
                  : tabNumber == 2
                  ? Price[1][2]
                  : Price[2][2]
              }
              unit={
                tabNumber === 1 ? unit[0] : tabNumber == 2 ? unit[1] : unit[2]
              }
              subtitle={Subtitle[2]}
              title={Title[2]}
              type={2}
            />
          </div>
        </div>
      </div>

      <div className={cn(style.spacer5)} />
    </>
  );
};

export default HeroSectionPricing;
