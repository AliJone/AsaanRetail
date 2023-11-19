import Selector from './selector';
import Tabs from './tabs';
import Tag from '../Tag';
import cn from 'classnames';
import style from './styleSheet.module.sass';
import { useState } from 'react';
import Selector from "./selector";
import Tabs from "./tabs";
import Tag from "../tag";
import cn from "classnames";
import style from "./styleSheet.module.sass";
import { useState } from "react";

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
      <div className={cn(style.spacer1)} />
      <div className={cn(style.textFrame)}>
        <Tag text="Customize" />

        <span className={cn(style.titleText)}>{Title}</span>

        <span className={cn(style.subTitleText)}>{subtTitle}</span>
      </div>

      <div className={cn(style.spacer1)} />
      <div className={cn(style.tabsFrame)}>
        <Tabs tabNumber={tabNumber} handleClick={handleClick} />
      </div>

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
  );
};

export default CustomizePayment;
