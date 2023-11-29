import { Input } from "antd";

const inputStyle = {
  border: "1px solid #D9E0DC",
  backgroundColor: "#FFF",
};

const IntegrationSearchInputField = ({ placeHolder, size, onInputChange }) => {
  return (
    <Input
      placeholder={placeHolder}
      size={size}
      bordered={false}
      onChange={onInputChange}
      style={inputStyle}
    />
  );
};

export default IntegrationSearchInputField;
