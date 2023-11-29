import { Select } from "antd";

const customSelectStyle = {
  width: "100%",
  border: "#D9E0DC",
  "&:focus": {
    border: "none !important",

    borderColor: "#d9d9d9 !important",
    boxShadow: "0 0 0 2px rgba(0, 0, 0, 0.2) !important",
  },
};

const CustomSelect = ({ options }) => {
  return (
    <Select
      size="large"
      mode="multiple"
      allowClear
      style={customSelectStyle}
      placeholder="Please select"
      options={options}
    />
  );
};

export default CustomSelect;
