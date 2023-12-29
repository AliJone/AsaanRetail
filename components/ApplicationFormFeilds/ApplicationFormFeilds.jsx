// ApplicationForm.jsx
import React from "react";
import Image from "next/image";
import { Form, Input, Button, Upload } from "antd";
import { UploadOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import {
  CareerInputField,
  CareerLargeInputField,
} from "../inputs/CareerApplyFields";
import styles from "./styles.module.sass"; // make sure you have this SASS file

import captcha from "./assets/images/captcha.png";
import CustomTextButton from "../buttons/textButton";
import CustomFilledButton from "../buttons/filledButton";
import CustomUploadButton from "../buttons/uploadButton";

const ApplicationFormFeilds = () => {
  // Function to handle file upload, assuming you need to handle it
  const handleUpload = ({ file, onSuccess }) => {
    setTimeout(() => {
      // Mock upload process
      onSuccess("ok");
    }, 0);
  };

  return (
    <div className={styles.formContainer}>
      <Form layout="vertical">
        <h2 className={styles.heading}>Application Form</h2>
        <div className={styles.Container}>
          <div className={styles.Right}>
            <Form.Item className={styles.Labels} label="* Name" name="name">
              <CareerInputField
                size="large"
                placeHolder="Jhon Doe"
                prefix={<UserOutlined />}
              />
            </Form.Item>
            <Form.Item className={styles.Labels} label="* Email" name="email">
              <CareerInputField
                type="email"
                size="large"
                placeHolder="  Jhon@gmail.com"
                prefix={<MailOutlined />}
              />
            </Form.Item>
            <Form.Item className={styles.Labels} label="* Phone" name="phone">
              <Input
                addonBefore="+92"
                type="phonenumber"
                size="large"
                placeholder="  3229775013"
                style={{
                  border: "none",
                  // borderBottom: "1px solid #D9E0DC",
                  backgroundColor: "#FFF",
                }}
              />

              {/* <CareerInputField
                addonBefore="+92"
                type="phonenumber"
                size="large"
                placeholder="  3229775013"
                style={{
                  border: "none",
                  // borderBottom: "1px solid #D9E0DC",
                  // backgroundColor: "#FFF",
                }}
              /> */}
            </Form.Item>
          </div>
          <div className={styles.Left}>
            <Form.Item
              className={styles.Labels}
              label="* Cover Letter"
              name="coverLetter"
    //           style={{
    //             color: "var(--character-title-85, rgba(0, 0, 0, 0.85))",
    // fontFamily: "Roboto",
    // fontSize: "1.05rem",
    // fontStyle: "normal",
    // fontWeight: "400",
    // lineHeight: "1.65rem",
    //           }}
            >
              <CareerLargeInputField size="large" placeHolder="  Enter Text" />
            </Form.Item>
            <Form.Item className={styles.Labels} label="* Resume" name="resume">
              <CustomUploadButton customRequest={handleUpload} />
              <div className={styles.Allowed}>
                Allowed Type(s): .pdf, .doc, .docx
              </div>
            </Form.Item>
        <Form.Item className={styles.Submit}>
          <Image src={captcha} style={{marginBottom:"24px"}} />
          <Button
            className={styles.SubmitButton}
            type="primary"
            size="large"
            htmlType="submit"
          >
            Apply now
          </Button>
        </Form.Item>
          </div>
        </div>

      </Form>
    </div>
  );
};

export default ApplicationFormFeilds;
