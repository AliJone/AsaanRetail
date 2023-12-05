import React from "react";
import style from "./style.module.sass";
import { Input } from "antd";

function HeroSectionInput({ placeHolder, borderRadius }) {
  const fieldStyle = {
    borderRadius: borderRadius || "0.625rem",
  };

  return (
    <div className={style.FieldClass} style={fieldStyle}>
      <Input placeholder={placeHolder} bordered={false} />
    </div>
  );
}

export default HeroSectionInput;
