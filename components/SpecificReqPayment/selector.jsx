import { Divider, Select, Switch } from "antd";

import Counter from "./counter";
import CustomFilledButton from "../buttons/filledButton";
import Image from "next/image";
import QuestionMark from "./assests/QuestionCircle.svg";
import cn from "classnames";
import style from "./styleSheet.module.sass";
import { useState, useEffect } from "react";

const Selector = ({ handletype, type, users, Location, tabNumber, priceProps }) => {
  const [priceState, setPriceState] = useState(priceProps[type-1][tabNumber - 1]);
  const [usersState, setUsersState] = useState(type == 1 ? users[0] : type == 2 ? users[1] : users[2]);
  const [LocationState, setLocationState] = useState(type == 1 ? Location[0] : type == 2 ? Location[1] : Location[2]);
  const [switchState, setSwitchState] = useState(false);

  useEffect(() => {
    setPriceState(priceProps[type-1][tabNumber - 1]);
    setUsersState(type == 1 ? users[0] : type == 2 ? users[1] : users[2]);
    setLocationState(type == 1 ? Location[0] : type == 2 ? Location[1] : Location[2]);
  }, [tabNumber, type]);

  const handleChange = (type) => {
    handletype(type);
    if (type === 1) {
      setUsersState(users[0]);
      setLocationState(Location[0]);
    }
    if (type === 2) {
      // setPrice(120000);
      setUsersState(users[1]);
      setLocationState(Location[1]);
    }
    if (type === 3) {
      // setPrice(60000);
      setUsersState(users[2]);
      setLocationState(Location[2]);
    }
    
    let price = priceProps[type-1][tabNumber - 1];
    setPriceState(price);
  };

  const handleSwitchChangePOS = (checked) => {
    setSwitchState(checked);
    // console.log(`switch to ${checked}`);
  }


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
              value={type}
              style={{ width: "47%" }}
              onChange={handleChange}
              options={[
                { value: 1, label: "Monthly" },
                { value: 2, label: "Quaterly" },
                { value: 3, label: "Yearly" },
              ]}
            />
          </div>

          <div className={cn(style.divFeatures)}>
            <div className={cn(style.convertToRow, style.manageFeatures)}>
              <div className={cn(style.textFeaturesDiv)}>
                <span className={cn(style.textFeatures)}>Orders/{type == 1 ? "mo": 
                type == 2 ? "qtr" : "yr"
                }</span>
                <Image src={QuestionMark} alt={"QuestionMark"} />
              </div>
              <Counter count={priceState} setCount={setPriceState} step={500} />
            </div>
            <div className={cn(style.convertToRow, style.manageFeatures)}>
              <div className={cn(style.textFeaturesDiv)}>
                <span className={cn(style.textFeatures)}>Users</span>
                <Image src={QuestionMark} alt={"QuestionMark"} />
              </div>
              <Counter count={usersState} setCount={setUsersState}/>
            </div>
            <div className={cn(style.convertToRow, style.manageFeatures)}>
              <div className={cn(style.textFeaturesDiv)}>
                <span className={cn(style.textFeatures)}>Location</span>
                <Image src={QuestionMark} alt={"QuestionMark"} />
              </div>
              <Counter count={LocationState} setCount={setLocationState}/>
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
              <Switch onChange={handleSwitchChangePOS} className={cn(style.switchColor)} />
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
              <span className={cn(style.titleRecipt)}>{type == 1 ? "Monthly": 
                type == 2 ? "Quaterly" : "Yearly"
                }</span>
            </div>

            <div className={cn(style.manageRecipt, style.convertToRow)}>
              <span className={cn(style.textRecipt)}>Order/{type == 1 ? "mo": 
                type == 2 ? "qtr" : "yr"
                }</span>
              <span className={cn(style.textRecipt)}>{priceState}</span>
            </div>

            <div className={cn(style.manageRecipt, style.convertToRow)}>
              <span className={cn(style.textRecipt)}>Users</span>
              <span className={cn(style.textRecipt)}>{usersState}</span>
            </div>

            <div className={cn(style.manageRecipt, style.convertToRow)}>
              <span className={cn(style.textRecipt)}>Location</span>
              <span className={cn(style.textRecipt)}>{LocationState}</span>
            </div>

            <div className={cn(style.manageRecipt, style.convertToRow)}>
              <span className={cn(style.textRecipt)}>POS</span>
              <span className={cn(style.textRecipt)}> { 
              switchState ? "Included" : "Not Included"
              }</span>
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
