// ApplicationForm.jsx
import React from "react";
import Image from "next/image";
import cn from "classnames";
import { Form, Input, Button, Upload, Divider, Select } from "antd";
import {
  WhatsAppOutlined,
  PhoneOutlined,
  MailOutlined,
  UserOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import styles from "./styles.module.sass"; // make sure you have this SASS file
import limits from "../../styles/Limits.module.css";
import AppCreationInputField from "../inputs/AppCreationInputFields";
import { CareerLargeInputField } from "../inputs/CareerApplyFields";
import CustomFilledButton from "../buttons/filledButton";

import captcha from "./assets/images/captcha.png";
import CustomSelect from "../dropDowns/AntDesignDropdown";
import ScrollAnimation from "react-animate-on-scroll";

const options = [{
  label: 'Up to 100',
  value: '100',
},
{
  label: '101 - 500',
  value: '500',
},
{
  label: '501 - 3000',
  value: '3000',
},
{
  label: '3001 - 10,000',
  value: '10,000',
},
{
  label: '10,001 +',
  value: '10,001',
},
{
  label: 'I\'m launching my ecommerce site soon',
  value: 'launching',
},

];
// for (let i = 10; i < 36; i++) {
//   options.push({
//     label: i.toString(36) + i,
//     value: i.toString(36) + i,
//   });
// }

const ContactUsFormFeilds = ({ data, state }) => {
  // Function to handle file upload, assuming you need to handle it
  const handleUpload = ({ file, onSuccess }) => {
    setTimeout(() => {
      // Mock upload process
      onSuccess("ok");
    }, 0);
  };

  return (
    <div className={styles.BG}>
      <div className={styles.formContainer}>
        <div className={limits.Limit}>
          {/* Sales Form */}
          <ScrollAnimation
            style={{ width: "100%" }}
            animateOnce={true}
            animateIn={"animate__fadeInUp"}
          >
            <div id="sales-section" className={styles.AContainer}>
              <div className={styles.ALeft}>
                <div className={styles.AHead}>
                  <div className={styles.ATitle}>
                    <h1>
                      Contact <span className={styles.underLine}>Sales</span>
                    </h1>
                  </div>
                  <div className={styles.ASubTitle}>
                    <h2>Contact our sales team to explore how our solutions</h2>
                    <h2>can drive growth and transform your business.</h2>
                  </div>
                </div>
                <div className={styles.AData}>
                  <div className={styles.ADataHead}>
                    <PhoneOutlined style={{ fontSize: "24px" }} />
                    <h3>Helpline 02</h3>
                  </div>
                  <div className={styles.ADataBody}>
                    <p>+92-318-4866136</p>
                  </div>
                </div>
                <div className={styles.AData}>
                  <div className={styles.ADataHead}>
                    <MailOutlined style={{ fontSize: "24px" }} />
                    <h3>Email</h3>
                  </div>
                  <div className={styles.ADataBody}>
                    <p>Sales@asaanretail.pk</p>
                  </div>
                </div>
                <div className={styles.DayCover}>
                  <div className={styles.AData}>
                    <div className={styles.ADataHead}>
                      <WhatsAppOutlined style={{ fontSize: "24px" }} />
                      <h3>WhatsApp Us</h3>
                    </div>
                    <div className={styles.ADataBody}>
                      <p>+92-318-4866136</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={cn(styles.ARight, styles.Container)}>
                <Form layout="vertical" style={{ width: "100%" }}>
                  <>
                  <Form.Item
                      className={styles.Labels}
                      label="* Name"
                      name="name"
                    >
                      <AppCreationInputField
                        size="large"
                        placeHolder="Jhon Doe"
                        prefix={<UserOutlined />}
                      />
                    </Form.Item>
                    <Form.Item
                      className={styles.Labels}
                      label="* Company Name"
                      name="companyName"
                    >
                      <AppCreationInputField
                        size="large"
                        placeHolder="  Highfy"
                      />
                    </Form.Item>
                    <Form.Item
                      className={styles.Labels}
                      label="* Email"
                      name="email"
                    >
                      <AppCreationInputField
                        type="email"
                        size="large"
                        placeHolder="  Jhon@gmail.com"
                        prefix={<MailOutlined />}
                      />
                    </Form.Item>
                    <Form.Item
                      className={styles.Labels}
                      label="* Phone"
                      name="phone"
                    >
                      <Input
                        addonBefore="+92"
                        type="phonenumber"
                        size="large"
                        placeholder="  3229775013"
                      />
                    </Form.Item>
                    <Form.Item
                      className={styles.Labels}
                      label="* Orders/Month"
                      name="ordersMonth"
                    >
                      <Select
                        size="large"
                        // mode="multiple"
                        allowClear
                        style={{
                          width: "100%",
                        }}
                        placeholder="Please select"
                        options={options}
                      />
                    </Form.Item>
                    {/* <Form.Item
                      className={styles.Labels}
                      label="* Sales Channels"
                      name="salesChannels"
                    >
                      <Select
                        size="large"
                        mode="multiple"
                        allowClear
                        style={{
                          width: "100%",
                        }}
                        placeholder="Please select"
                        options={options}
                      />
                    </Form.Item>
                    <Form.Item
                      className={styles.Labels}
                      label="* Couriers"
                      name="couriers"
                    >
                      <Select
                        size="large"
                        mode="multiple"
                        allowClear
                        style={{
                          width: "100%",
                        }}
                        placeholder="Please select"
                        options={options}
                      />
                    </Form.Item> */}
                  </>

                  {/* <Form.Item className={styles.Labels} label="* Resume" name="resume">
                  <Upload customRequest={handleUpload} accept=".pdf,.doc,.docx">
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                  </Upload>
                  <div className={styles.Allowed}>
                    Allowed Type(s): .pdf, .doc, .docx
                  </div>
                </Form.Item> */}

                  <Form.Item className={styles.Submit}>
                    {/* <Image src={captcha} /> */}
                    {/* <Button
                    className={styles.SubmitButton}
                    type="primary"
                    size="large"
                    htmlType="submit"
                  >
                    Apply now
                  </Button> */}

                    <CustomFilledButton
                      type="primary"
                      size="large"
                      htmlType="submit"
                      width={"100%"}
                      height={"3.5rem"}
                    >
                      Get Quote
                    </CustomFilledButton>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </ScrollAnimation>

          <div className={styles.Spacer}></div>

          {/* Support Section Form */}
          <ScrollAnimation
            style={{ width: "100%" }}
            animateOnce={true}
            animateIn={"animate__fadeInUp"}
          >
            <div id="support-section" className={styles.AContainer}>
              <div className={styles.ALeft}>
                <div className={styles.AHead}>
                  <div className={styles.ATitle}>
                    <h1>
                      Contact <span className={styles.underLine}>Support</span>
                    </h1>
                  </div>
                  <div className={styles.ASubTitle}>
                    <h2>
                      Contact our support team to explore how our solutions
                    </h2>
                    <h2>can drive growth and transform your business.</h2>
                  </div>
                </div>
                <div className={styles.AData}>
                  <div className={styles.ADataHead}>
                    <PhoneOutlined style={{ fontSize: "24px" }} />
                    <h3>Helpline 02</h3>
                  </div>
                  <div className={styles.ADataBody}>
                    <p>+92-318-4866136</p>
                  </div>
                </div>
                <div className={styles.AData}>
                  <div className={styles.ADataHead}>
                    <MailOutlined style={{ fontSize: "24px" }} />
                    <h3>Email</h3>
                  </div>
                  <div className={styles.ADataBody}>
                    <p>Sales@asaanretail.pk</p>
                  </div>
                </div>
                <div className={styles.DayCover}>
                  <div className={styles.AData}>
                    <div className={styles.ADataHead}>
                      <WhatsAppOutlined style={{ fontSize: "24px" }} />
                      <h3>WhatsApp Us</h3>
                    </div>
                    <div className={styles.ADataBody}>
                      <p>+92-318-4866136</p>
                    </div>
                  </div>
                  <div className={styles.Divider}>
                    <Divider />
                  </div>
                  <div className={styles.AData}>
                    <div className={styles.ADataHead}>
                      <h3>Monday - Saturday</h3>
                    </div>
                    <div className={styles.ADataBody}>
                      <p>10:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>


              <div className={cn(styles.ARight, styles.Container)}>
                <Form layout="vertical" style={{ width: "100%" }}>
                  <>
                    <Form.Item
                      className={styles.Labels}
                      label="* Name"
                      name="name"
                    >
                      <AppCreationInputField
                        size="large"
                        placeHolder="Jhon Doe"
                        prefix={<UserOutlined />}
                      />
                    </Form.Item>
                    <Form.Item
                      className={styles.Labels}
                      label="* Email"
                      name="email"
                    >
                      <AppCreationInputField
                        type="email"
                        size="large"
                        placeHolder="  Jhon@gmail.com"
                        prefix={<MailOutlined />}
                      />
                    </Form.Item>
                    <Form.Item
                      className={styles.Labels}
                      label="* Phone"
                      name="phone"
                    >
                      <Input
                        addonBefore="+92"
                        type="phonenumber"
                        size="large"
                        placeholder="  3229775013"
                      />
                    </Form.Item>
                    <Form.Item
                      className={styles.Labels}
                      label="Message"
                      name="coverLetter"
                    >
                      <CareerLargeInputField
                        size="large"
                        placeHolder="  Your message here"
                      />
                    </Form.Item>

                    {/* atachment */}
                    <Form.Item className={styles.Labels} label="Attachments" name="attachments">
                      <Upload customRequest={handleUpload} accept=".pdf,.doc,.docx">
                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                      </Upload>
                      <div className={styles.Allowed}>
                        Allowed Type(s): .pdf, .doc, .docx
                      </div>
                    </Form.Item>
                  </>

                  {/* <Form.Item className={styles.Labels} label="* Resume" name="resume">
                  <Upload customRequest={handleUpload} accept=".pdf,.doc,.docx">
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                  </Upload>
                  <div className={styles.Allowed}>
                    Allowed Type(s): .pdf, .doc, .docx
                  </div>
                </Form.Item> */}

                  <Form.Item className={styles.Submit}>
                    {/* <Image src={captcha} /> */}
                    {/* <Button
                    className={styles.SubmitButton}
                    type="primary"
                    size="large"
                    htmlType="submit"
                  >
                    Apply now
                  </Button> */}

                    <CustomFilledButton
                      type="primary"
                      size="large"
                      htmlType="submit"
                      width={"100%"}
                      height={"3.5rem"}
                    >
                      Submit
                    </CustomFilledButton>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default ContactUsFormFeilds;
