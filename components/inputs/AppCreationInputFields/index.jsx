import React from "react";
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
  const mergedStyle = { ...defaultInputStyle, ...customStyle };

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
    />
  );
};

export default AppCreationInputField;
