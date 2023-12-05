import { Input } from "antd";
import React from "react";
import style from "./style.module.sass";
import { useState } from "react";

function HeroSectionInput({ placeHolder, value, onChange, borderRadius }) {
  // const [value, setValue] = useState("");
  const fieldStyle = {
    borderRadius: borderRadius || "0.625rem",
  };

  return (
    <div className={style.FieldClass} style={fieldStyle}>
      <Input placeholder={placeHolder} bordered={false} 
      value={value}
      onChange={(e) => {
        onChange(e);
      }}
      />
    </div>
  );
}

export default HeroSectionInput;
