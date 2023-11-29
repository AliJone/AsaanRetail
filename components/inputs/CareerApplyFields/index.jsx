import React from "react";
import { Input } from "antd";

const inputStyle = {
  border: "1px solid #D9E0DC",
  backgroundColor: "#FFF",
};

const CareerInputField = ({
  placeHolder,
  size,
  onInputChange,
  prefix,
  addonBefore,
  type,
}) => {
  return (
    <Input
      placeholder={placeHolder}
      size={size}
      type={type}
      bordered={false}
      prefix={prefix}
      onChange={onInputChange}
      addonBefore={addonBefore}
      style={inputStyle}
    />
  );
};

const CareerLargeInputField = ({
  placeHolder,
  onInputChange,
  prefix,
  addonBefore,
  type,
}) => {
  return (
    <Input.TextArea
      placeHolder={placeHolder}
      size="large"
      type={type}
      onInputChange={onInputChange}
      prefix={prefix}
      addonBefore={addonBefore}
      style={inputStyle}
    />
  );
};

export { CareerInputField, CareerLargeInputField };
