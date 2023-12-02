import React from "react";
import style from "./style.module.sass";
import { Input } from "antd";

function HeroSectionInput({ placeHolder }) {
  return (
    <div className={style.FieldClass}>
      <Input
        placeholder={placeHolder}
        bordered={false}
        // className={style.textFieldCard}
      />
      {/* <InputField placeHolder={placeHolder} /> */}
    </div>
  );
}

export default HeroSectionInput;
