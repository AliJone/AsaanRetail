// ApplicationForm.jsx

import { Button, Divider, Form, Input, Select, Upload, message } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  UploadOutlined,
  UserOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from 'react';

import AppCreationInputField from "../inputs/AppCreationInputFields";
import { CareerLargeInputField } from "../inputs/CareerApplyFields";
import CustomFilledButton from "../buttons/filledButton";
import CustomSelect from "../dropDowns/AntDesignDropdown";
import Image from "next/image";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import captcha from "./assets/images/captcha.png";
import cn from "classnames";
import limits from "../../styles/Limits.module.css";
import styles from "./styles.module.sass"; // make sure you have this SASS file

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

const ContactUsFormFeilds = ({ data, state }) => {

  // Sales Form
  const [SalesName , setSalesName] = useState("");
  const [SalesCompanyName , setSalesCompanyName] = useState("");
  const [SalesEmail , setSalesEmail] = useState("");
  const [SalesPhone , setSalesPhone] = useState("");
  const [SalesOrdersMonth , setSalesOrdersMonth] = useState("");


  // Support Form
  const [SupportName , setSupportName] = useState("");
  const [SupportEmail , setSupportEmail] = useState("");
  const [SupportPhone , setSupportPhone] = useState("");
  const [Message , setMessage] = useState("");

  function handleSalesSubmit(){
    if(SalesName == "" || SalesCompanyName == "" || SalesEmail == "" || SalesPhone == "" || SalesOrdersMonth == ""){
      message.error("Please fill all the Sales Form fields")
    }
    else{
      console.log("Submited Sales Form")
    }
  }

  function handleSupportSubmit(){
    if(SupportName == "" || SupportEmail == "" || SupportPhone == "" || Message == ""){
      message.error("Please fill all the Support Form fields")
    }
    else{
      console.log("Submited Support Form")
    }
  }





  
  // Function to handle file upload, assuming you need to handle it
  const handleUpload = ({ file, onSuccess }) => {
    setTimeout(() => {
      // Mock upload process
      onSuccess("ok");
    }, 0);
  };
  // Separate component for Email
  const EmailComponent = ({ email, label }) => (
    <a href={`mailto:${email}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div className={styles.AData}>
        <div className={styles.ADataHead}>
          <MailOutlined style={{ fontSize: "24px" }} />
          <h3>{label}</h3>
        </div>
        <div className={styles.ADataBody}>
          <p>{email}</p>
        </div>
      </div>
    </a>
  );

  // Separate component for Phone
  const PhoneComponent = ({ phone, label }) => (
    <a href={`tel:${phone}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div className={styles.AData}>
        <div className={styles.ADataHead}>
          <PhoneOutlined style={{ fontSize: "24px" }} />
          <h3>{label}</h3>
        </div>
        <div className={styles.ADataBody}>
          <p>{phone}</p>
        </div>
      </div>
    </a>
  );

  // Separate component for WhatsApp
  const WhatsAppComponent = ({ whatsappLink, label, phone }) => (
    <a href={whatsappLink} style={{ textDecoration: "none", color: "inherit" }}>
      <div className={styles.AData}>
        <div className={styles.ADataHead}>
          <WhatsAppOutlined style={{ fontSize: "24px" }} />
          <h3>{label}</h3>
        </div>
        <div className={styles.ADataBody}>
          <p>{phone}</p>
        </div>
      </div>
    </a>
  );

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
                <PhoneComponent phone="+92-318-4866136" label="Helpline" />
                <EmailComponent email="Sales@asaanretail.pk" label="Email" />
                <div className={styles.DayCover}>

                  <WhatsAppComponent whatsappLink="https://wa.me/923184866136" phone="+92-318-4866136" label="WhatsApp Us" />
                </div>
              </div>

              <div className={cn(styles.ARight, styles.Container)}>
                <Form layout="vertical" style={{ width: "100%" }} >
                  <>
                    <Form.Item
                      className={styles.Labels}
                      label="* Name"
                      name="Salesname"
                    >
                      <AppCreationInputField
                        size="large"
                        placeHolder="Jhon Doe"
                        onInputChange={(e) => setSalesName(e.target.value)}
                        height={"3rem"}
                        prefix={<UserOutlined />}
                      />
                    </Form.Item>
                    <Form.Item
                      className={styles.Labels}
                      label="* Company Name"
                      name="SalescompanyName"
                    >
                      <AppCreationInputField
                        size="large"
                        height={"3rem"}
                        placeHolder="  Highfy"
                        onInputChange={(e) => setSalesCompanyName(e.target.value)}
                      />
                    </Form.Item>
                    <Form.Item
                      className={styles.Labels}
                      label="* Email"
                      name="Salesemail"
                    >
                      <AppCreationInputField
                        type="email"
                        size="large"
                        height={"3rem"}
                        onInputChange={(e) => setSalesEmail(e.target.value)}
                        placeHolder="  Jhon@gmail.com"
                        prefix={<MailOutlined />}
                      />
                    </Form.Item>
                    <Form.Item
                      className={styles.Labels}
                      label="* Phone"
                      name="Salesphone"
                    >
                      <Input
                        addonBefore="+92"
                        // style={{ height: "3rem" }}
                        type="phonenumber"
                        onChange={(e) => setSalesPhone(e.target.value)}
                        size="large"
                        placeholder="  3229775013"
                      />
                    </Form.Item>
                    <Form.Item
                      className={styles.Labels}
                      label="* Orders/Month"
                      name="SalesordersMonth"
                    >
                      <Select
                        size="large"
                        // mode="multiple"
                        allowClear
                        style={{
                          width: "100%",
                          height:"3rem"
                        }}
                        placeholder="Please select"
                        options={options}
                        onChange={(e) => setSalesOrdersMonth(e)}
                      />
                    </Form.Item>
                    
                  </>

                  

                  <Form.Item className={styles.Submit}>

                    <CustomFilledButton
                      type="primary"
                      size="large"
                      htmlType="submit"
                      width={"100%"}
                      height={"3.5rem"}
                      handleClick={handleSalesSubmit}

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
                <PhoneComponent phone="+92-318-4866136" label="Helpline" />
                <EmailComponent email="Sales@asaanretail.pk" label="Email" />
                <div className={styles.DayCover}>
                  
                <WhatsAppComponent whatsappLink="https://wa.me/923184866136" phone="+92-318-4866136" label="WhatsApp Us" />
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
                      name="Supportname"
                    >
                      <AppCreationInputField
                        height={"3rem"}
                        size="large"
                        placeHolder="Jhon Doe"
                        onInputChange={(e) => setSupportName(e.target.value)}
                        prefix={<UserOutlined />}
                      />
                    </Form.Item>
                    <Form.Item
                      className={styles.Labels}
                      label="* Email"
                      name="Supportemail"
                    >
                      <AppCreationInputField
                        type="email"
                        size="large"
                        height={"3rem"}
                        placeHolder="  Jhon@gmail.com"
                        onInputChange={(e) => setSupportEmail(e.target.value)}
                        prefix={<MailOutlined />}
                      />
                    </Form.Item>
                    <Form.Item
                      className={styles.Labels}
                      label="* Phone"
                      name="Supportphone"
                    >
                      <Input
                        addonBefore="+92"
                        type="phonenumber"
                        onChange={(e) => setSupportPhone(e.target.value)}
                        size="large"
                        placeholder="  3229775013"
                      />
                    </Form.Item>
                    <Form.Item
                      className={styles.Labels}
                      label="* Message"
                      name="SupportcoverLetter"
                    >
                      <CareerLargeInputField
                        size="large"
                        onInputChange={(e) => setMessage(e.target.value)}
                        placeHolder="  Your message here"
                      />
                    </Form.Item>
                    
                    <Form.Item className={styles.Labels} label="Attachments" name="attachments">
                      <Upload customRequest={handleUpload} accept=".pdf,.doc,.docx">
                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                      </Upload>
                      <div className={styles.Allowed}>
                        Allowed Type(s): .pdf, .doc, .docx
                      </div>
                    </Form.Item>
                  </>

                  <Form.Item className={styles.Submit}>

                    <CustomFilledButton
                      type="primary"
                      size="large"
                      htmlType="submit"
                      width={"100%"}
                      height={"3.5rem"}
                      handleClick={handleSupportSubmit}
                      
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
