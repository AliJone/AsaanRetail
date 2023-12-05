import { Input } from "antd";
import React from "react";
import style from "./style.module.sass";
import { useState } from "react";

function HeroSectionInput({ placeHolder, value, onChange }) {
  // const [value, setValue] = useState("");
  return (
    <div className={style.FieldClass}>
      <Input
        placeholder={placeHolder}
        bordered={false}
        value={value}
        onChange={(e) => {
          onChange(e);
        }}
        // className={style.textFieldCard}
      />
      {/* <InputField placeHolder={placeHolder} /> */}
    </div>
  );
}

export default HeroSectionInput;
