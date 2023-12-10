import Selector from "./selector";
import Tabs from "./tabs";
import Tag from "../tag";
import cn from "classnames";
import limit from "../../styles/Limits.module.css";
import style from "./styleSheet.module.sass";
import { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";

const CustomizePayment = () => {
  const [tabNumber, setTabNumber] = useState(1);

  const handleClick = (tabNumber) => {
    setTabNumber(tabNumber);
  };

  const [type, setType] = useState("Monthly");

  const handleType = (type) => {
    setType(type);
  };

  const Title = (
    <>
      Pay for Your{" "}
      <span className={cn(style.underLine)}>
        <span />
        specific
      </span>{" "}
      requirements
    </>
  );

  const subtTitle =
    "Use our plan customizer to create your need specific plans.";

  return (
    <div className={cn(style.customizePaymentSection)}>
      <div className={cn(limit.Limit)}>
        <div className={cn(style.spacer1)} />
        <div className={cn(style.textFrame)}>
          <ScrollAnimation animateIn={"animate__fadeInUp"}>
            <Tag text="Customize" />
          </ScrollAnimation>

          <ScrollAnimation animateIn={"animate__fadeInUp"}>
            <span className={cn(style.titleText)}>{Title}</span>
          </ScrollAnimation>

          <ScrollAnimation animateIn={"animate__fadeInUp"}>
            <span className={cn(style.subTitleText)}>{subtTitle}</span>
          </ScrollAnimation>
        </div>

        <div className={cn(style.spacer1)} />

        <ScrollAnimation animateIn={"animate__fadeInUp"}>
          <div className={cn(style.tabsFrame)}>
            <Tabs tabNumber={tabNumber} handleClick={handleClick} />
          </div>
        </ScrollAnimation>

        <div className={cn(style.spacer2)} />

        <div className={cn(style.bgDiv2)}>
          <div className={cn(style.forBG)}>
            <span />
          </div>
        </div>

        <div className={cn(style.bgDiv)}>
          <div className={cn(style.selectorsFrame)}>
            <div className={cn(style.lowerCircle)} />
            <Selector handletype={handleType} type={type} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizePayment;
