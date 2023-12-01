import React, { useState } from "react";
import { Input } from "antd";

const defaultInputStyle = {
  border: "0.5px solid #D9E0DC",
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
  const [isFocused, setIsFocused] = useState(false);

  const mergedStyle = {
    ...defaultInputStyle,
    border: isFocused ? "0.5px solid #009241" : defaultInputStyle.border,
  };

  return (
    <Input
      placeholder={placeHolder}
      size={size}
      type={type}
      bordered={false}
      prefix={prefix}
      onChange={onInputChange}
      addonBefore={addonBefore}
      style={mergedStyle}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
};

const CareerLargeInputField = ({
  placeHolder,
  onInputChange,
  prefix,
  type,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const mergedStyle = {
    ...defaultInputStyle,
    border: isFocused ? "0.5px solid #009241" : defaultInputStyle.border,
  };

  return (
    <Input.TextArea
      placeholder={placeHolder}
      size="large"
      type={type}
      onChange={onInputChange}
      prefix={prefix}
      style={mergedStyle}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
};

export { CareerInputField, CareerLargeInputField };
