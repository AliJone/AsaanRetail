import React, { useState } from "react";
import { Input } from "antd";
import styles from "./styles.module.sass";

const CareerInputField = ({
  placeHolder,
  size,
  onInputChange,
  prefix,
  addonBefore,
  type,
}) => {
  return (
    <div className={styles.inputContainer}>
      <Input
        placeholder={placeHolder}
        size={size}
        type={type}
        bordered={false}
        prefix={prefix}
        onChange={onInputChange}
        addonBefore={addonBefore}
      />
    </div>
  );
};

const CareerLargeInputField = ({
  placeHolder,
  onInputChange,
  prefix,
  type,
}) => {
  return (
    <div className={styles.largeInputContainer}>
      <Input.TextArea
        placeholder={placeHolder}
        size="large"
        type={type}
        onChange={onInputChange}
        prefix={prefix}
      />
    </div>
  );
};

export { CareerInputField, CareerLargeInputField };
