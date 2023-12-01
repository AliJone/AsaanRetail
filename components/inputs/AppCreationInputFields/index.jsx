import React, { useState } from "react";
import { Input } from "antd";

const defaultInputStyle = {
  border: "1px solid #D9E0DC",
  backgroundColor: "#FFF",
};

const AppCreationInputField = ({
  placeHolder,
  size,
  onInputChange,
  prefix,
  addonBefore,
  type,
  customStyle,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const mergedStyle = {
    ...defaultInputStyle,
    ...customStyle,
    border: isFocused ? "1px solid #009241" : defaultInputStyle.border,
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

export default AppCreationInputField;
