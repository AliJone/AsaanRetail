import { Divider, Select, Switch } from "antd";

import Counter from "./counter";
import CustomFilledButton from "../buttons/filledButton";
import Image from "next/image";
import QuestionMark from "./assests/QuestionCircle.svg";
import cn from "classnames";
import style from "./styleSheet.module.sass";
import { useState } from "react";

const Selector = ({ handletype, type }) => {
  const [price, setPrice] = useState("20,000");

  const handleChange = (type) => {
    handletype(type);
    if (type === "Monthly") {
      setPrice("20,000");
    }
    if (type === "Yearly") {
      setPrice("120,000");
    }
    if (type === "Quaterly") {
      setPrice("60,000");
    }
  };

  return (
    <>
      <div className={cn(style.selectorDiv)}>
        <div className={cn(style.selectorLeftPane)}>
          <div className={cn(style.convertToRow, style.manageDropDown)}>
            <span className={cn(style.textType)}>Billed </span>
            <Select
              className={cn(style.dropDown)}
              bordered={false}
              defaultValue={type}
              style={{ width: "47%" }}
              onChange={handleChange}
              options={[
                { value: "Monthly", label: "Monthly" },
                { value: "Quaterly", label: "Quaterly" },
                { value: "Yearly", label: "Yearly" },
              ]}
            />
          </div>

          <div className={cn(style.divFeatures)}>
            <div className={cn(style.convertToRow, style.manageFeatures)}>
              <div className={cn(style.textFeaturesDiv)}>
                <span className={cn(style.textFeatures)}>Orders/{type}</span>
                <Image src={QuestionMark} alt={"QuestionMark"} />
              </div>
              <Counter />
            </div>
            <div className={cn(style.convertToRow, style.manageFeatures)}>
              <div className={cn(style.textFeaturesDiv)}>
                <span className={cn(style.textFeatures)}>Users</span>
                <Image src={QuestionMark} alt={"QuestionMark"} />
              </div>
              <Counter />
            </div>
            <div className={cn(style.convertToRow, style.manageFeatures)}>
              <div className={cn(style.textFeaturesDiv)}>
                <span className={cn(style.textFeatures)}>Location</span>
                <Image src={QuestionMark} alt={"QuestionMark"} />
              </div>
              <Counter />
            </div>
            <div className={cn(style.convertToRow, style.manageFeatures)}>
              <div className={cn(style.textFeaturesDiv)}>
                <span className={cn(style.textFeatures)}>Automation</span>
                <Image src={QuestionMark} alt={"QuestionMark"} />
              </div>
              <Switch className={cn(style.switchColor)} />
            </div>

            <div className={cn(style.convertToRow, style.manageFeatures)}>
              <div className={cn(style.textFeaturesDiv)}>
                <span className={cn(style.textFeatures)}>POS</span>
                <Image src={QuestionMark} alt={"QuestionMark"} />
              </div>
              <Switch className={cn(style.switchColor)} />
            </div>

            <div className={cn(style.spacerSelector1, style.desktopView)} />
          </div>

          <div className={cn(style.totalAmountDiv, style.mobileView)}>
            <Divider className={cn(style.divider)} />
            <div className={cn(style.convertToRow, style.manageTotalAmount)}>
              <span className={cn(style.textRecipt)}>✨ Saved Rs 0</span>
              <span className={cn(style.titleRecipt)}>Rs 0/yr</span>
            </div>
            <CustomFilledButton
              handleClick={() => {}}
              width={"100%"}
              children={"Get Started"}
            />
          </div>
        </div>

        <div className={cn(style.selectorRightPane, style.desktopView)}>
          <div className={cn(style.reciptDiv)}>
            <div className={cn(style.manageRecipt, style.convertToRow)}>
              <span className={cn(style.titleRecipt)}>Total</span>
              <span className={cn(style.titleRecipt)}>{type}</span>
            </div>

            <div className={cn(style.manageRecipt, style.convertToRow)}>
              <span className={cn(style.textRecipt)}>Order/{type}</span>
              <span className={cn(style.textRecipt)}>{price}</span>
            </div>

            <div className={cn(style.manageRecipt, style.convertToRow)}>
              <span className={cn(style.textRecipt)}>Users</span>
              <span className={cn(style.textRecipt)}>2</span>
            </div>

            <div className={cn(style.manageRecipt, style.convertToRow)}>
              <span className={cn(style.textRecipt)}>Location</span>
              <span className={cn(style.textRecipt)}>2</span>
            </div>

            <div className={cn(style.manageRecipt, style.convertToRow)}>
              <span className={cn(style.textRecipt)}>POS</span>
              <span className={cn(style.textRecipt)}>Included</span>
            </div>
          </div>

          <div className={cn(style.totalAmountDiv)}>
            <Divider className={cn(style.divider)} />
            <div className={cn(style.convertToRow, style.manageTotalAmount)}>
              <span className={cn(style.textRecipt)}>✨ Saved Rs 0</span>
              <span className={cn(style.titleRecipt)}>Rs 0/yr</span>
            </div>
            <CustomFilledButton
              handleClick={() => {}}
              width={"100%"}
              children={"Get Started"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Selector;
