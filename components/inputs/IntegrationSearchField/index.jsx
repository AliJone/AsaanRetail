import React, { useState } from "react";
import { Input } from "antd";

const defaultInputStyle = {
  border: "1px solid #D9E0DC",
  backgroundColor: "#FFF",
};

const IntegrationSearchInputField = ({ placeHolder, size, onInputChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  const mergedStyle = {
    ...defaultInputStyle,
    border: isFocused ? "1px solid #009241" : defaultInputStyle.border,
  };

  return (
    <Input
      placeholder={placeHolder}
      size={size}
      bordered={false}
      onChange={onInputChange}
      style={mergedStyle}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
};

export default IntegrationSearchInputField;
