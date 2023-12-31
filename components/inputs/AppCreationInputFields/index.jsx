import React, { useState } from "react";

import { Input } from "antd";
import styles from "./styles.module.sass";

const AppCreationInputField = ({
  placeHolder,
  size,
  onInputChange,
  prefix,
  addonBefore,
  type,
  customStyle,
  height,
}) => {
  const mergedStyle = {
    ...customStyle,
  };

  return (
    <div className={styles.inputContainer} style = {{height: height!== undefined ? height: "auto"}}>
      <Input
        placeholder={placeHolder}
        size={size}
        type={type}
        bordered={false}
        prefix={prefix}
        onChange={onInputChange}
        addonBefore={addonBefore}
        style={mergedStyle}
        // onFocus={() => setIsFocused(true)}
        // onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};

export default AppCreationInputField;
