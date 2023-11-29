import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const customUploadButtonStyle = {
  backgroundColor: "#fff",
  border: "1px solid #d9d9d9",
  color: "#333",
  ":hover": {
    borderColor: "#d9d9d9",
    color: "#333",
    backgroundColor: "#fff",
  },
};

const CustomUploadButton = ({ customRequest }) => {
  return (
    <Upload customRequest={customRequest} accept=".pdf,.doc,.docx">
      <Button icon={<UploadOutlined />} style={customUploadButtonStyle}>
        Click to Upload
      </Button>
    </Upload>
  );
};

export default CustomUploadButton;
